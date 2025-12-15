import { useState, useMemo } from 'react';
import { formatWeight } from '../data/items';

export default function PackingList({ initialList, onBack }) {
  const [list, setList] = useState(initialList);
  const [editingItem, setEditingItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addToCategory, setAddToCategory] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', weight: 100 });

  const toggleItemChecked = (categoryKey, itemId) => {
    setList(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: prev[categoryKey].items.map(item =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }
    }));
  };

  const updateItemQuantity = (categoryKey, itemId, quantity) => {
    setList(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: prev[categoryKey].items.map(item =>
          item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      }
    }));
  };

  const deleteItem = (categoryKey, itemId) => {
    setList(prev => {
      const updatedItems = prev[categoryKey].items.filter(item => item.id !== itemId);
      if (updatedItems.length === 0) {
        const { [categoryKey]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items: updatedItems
        }
      };
    });
  };

  const addItem = (categoryKey) => {
    if (!newItem.name.trim()) return;

    const item = {
      id: `custom-${Date.now()}`,
      name: newItem.name,
      weight: parseInt(newItem.weight) || 100,
      size: 'klein',
      checked: false,
      quantity: 1,
      custom: true
    };

    setList(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: [...prev[categoryKey].items, item]
      }
    }));

    setNewItem({ name: '', weight: 100 });
    setShowAddModal(false);
    setAddToCategory(null);
  };

  const stats = useMemo(() => {
    let totalItems = 0;
    let checkedItems = 0;
    let totalWeight = 0;
    let packedWeight = 0;

    Object.values(list).forEach(category => {
      category.items.forEach(item => {
        const quantity = item.quantity || 1;
        totalItems += quantity;
        totalWeight += item.weight * quantity;
        if (item.checked) {
          checkedItems += quantity;
          packedWeight += item.weight * quantity;
        }
      });
    });

    return { totalItems, checkedItems, totalWeight, packedWeight };
  }, [list]);

  const progress = stats.totalItems > 0 ? (stats.checkedItems / stats.totalItems) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <button
            onClick={onBack}
            className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>←</span>
            <span>Terug</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Mijn Paklijst</h1>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* Progress card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-white/60 text-sm">Voortgang</p>
              <p className="text-white text-3xl font-bold">
                {stats.checkedItems} / {stats.totalItems}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm">Ingepakt gewicht</p>
              <p className="text-white text-3xl font-bold">
                {formatWeight(stats.packedWeight)}
              </p>
              <p className="text-white/60 text-sm">
                van {formatWeight(stats.totalWeight)}
              </p>
            </div>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-center text-green-300 mt-3 font-medium">
              🎉 Alles ingepakt! Goede reis!
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-4 mb-8">
          {Object.entries(list).map(([categoryKey, category]) => {
            const categoryChecked = category.items.filter(i => i.checked).length;

            return (
              <div
                key={categoryKey}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
              >
                {/* Category header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-semibold text-white text-lg">{category.name}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm text-white">
                      {categoryChecked}/{category.items.length}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setAddToCategory(categoryKey);
                      setShowAddModal(true);
                    }}
                    className="text-white/60 hover:text-white text-2xl transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Items */}
                <div className="divide-y divide-white/10">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 flex items-center gap-4 transition-colors ${
                        item.checked ? 'bg-white/5' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleItemChecked(categoryKey, item.id)}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          item.checked
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-white/40 hover:border-white'
                        }`}
                      >
                        {item.checked && '✓'}
                      </button>

                      {/* Item info */}
                      <div className={`flex-1 ${item.checked ? 'opacity-50' : ''}`}>
                        <p className={`text-white font-medium ${item.checked ? 'line-through' : ''}`}>
                          {item.name}
                          {item.custom && <span className="text-xs text-white/40 ml-2">(toegevoegd)</span>}
                        </p>
                        <p className="text-white/50 text-sm">
                          {formatWeight(item.weight * (item.quantity || 1))}
                          {(item.quantity || 1) > 1 && ` (${item.quantity}x)`}
                        </p>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateItemQuantity(categoryKey, item.id, (item.quantity || 1) - 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-white w-6 text-center">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateItemQuantity(categoryKey, item.id, (item.quantity || 1) + 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Delete button */}
                      <button
                        onClick={() => deleteItem(categoryKey, item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-2"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add new category button */}
        <button
          onClick={() => {
            const name = prompt('Naam van nieuwe categorie:');
            if (name) {
              setList(prev => ({
                ...prev,
                [`custom-${Date.now()}`]: {
                  name,
                  icon: '📦',
                  items: []
                }
              }));
            }
          }}
          className="w-full p-4 rounded-2xl border-2 border-dashed border-white/30 text-white/60 hover:text-white hover:border-white/50 transition-colors mb-8"
        >
          + Nieuwe categorie toevoegen
        </button>
      </div>

      {/* Add item modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Item toevoegen</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 text-sm mb-1">Naam</label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  placeholder="Bijv. Zonnebril"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">Gewicht (gram)</label>
                <input
                  type="number"
                  value={newItem.weight}
                  onChange={(e) => setNewItem(prev => ({ ...prev, weight: e.target.value }))}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  placeholder="100"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setAddToCategory(null);
                  setNewItem({ name: '', weight: 100 });
                }}
                className="flex-1 p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={() => addItem(addToCategory)}
                className="flex-1 p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Toevoegen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
