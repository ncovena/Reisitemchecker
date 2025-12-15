import { useState, useMemo } from 'react';
import { getRecommendedItems, formatWeight } from '../data/items';
import { questions } from '../data/questions';

export default function Suggestions({ answers, onCreateList }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const recommended = useMemo(() => getRecommendedItems(answers), [answers]);

  // Get airline baggage info
  const airlineInfo = useMemo(() => {
    if (answers.transport === 'plane' && answers.airline) {
      const airline = questions
        .find(q => q.id === 'airline')
        ?.options.find(o => o.value === answers.airline);
      return airline?.baggage;
    }
    return null;
  }, [answers]);

  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const toggleItem = (categoryKey, itemId) => {
    setSelectedItems(prev => {
      const categoryItems = prev[categoryKey] || {};
      return {
        ...prev,
        [categoryKey]: {
          ...categoryItems,
          [itemId]: !categoryItems[itemId]
        }
      };
    });
  };

  const selectAllInCategory = (categoryKey) => {
    const category = recommended[categoryKey];
    const allSelected = category.items.every(
      item => selectedItems[categoryKey]?.[item.id]
    );

    if (allSelected) {
      setSelectedItems(prev => ({ ...prev, [categoryKey]: {} }));
    } else {
      const allItems = {};
      category.items.forEach(item => {
        allItems[item.id] = true;
      });
      setSelectedItems(prev => ({ ...prev, [categoryKey]: allItems }));
    }
  };

  const totalWeight = useMemo(() => {
    let weight = 0;
    Object.entries(selectedItems).forEach(([categoryKey, items]) => {
      Object.entries(items).forEach(([itemId, isSelected]) => {
        if (isSelected) {
          const item = recommended[categoryKey]?.items.find(i => i.id === itemId);
          if (item) weight += item.weight;
        }
      });
    });
    return weight;
  }, [selectedItems, recommended]);

  const selectedCount = useMemo(() => {
    return Object.values(selectedItems).reduce((acc, items) => {
      return acc + Object.values(items).filter(Boolean).length;
    }, 0);
  }, [selectedItems]);

  const handleCreateList = () => {
    const list = {};
    Object.entries(selectedItems).forEach(([categoryKey, items]) => {
      const selectedInCategory = [];
      Object.entries(items).forEach(([itemId, isSelected]) => {
        if (isSelected) {
          const item = recommended[categoryKey]?.items.find(i => i.id === itemId);
          if (item) selectedInCategory.push({ ...item, checked: false, quantity: 1 });
        }
      });
      if (selectedInCategory.length > 0) {
        list[categoryKey] = {
          name: recommended[categoryKey].name,
          icon: recommended[categoryKey].icon,
          items: selectedInCategory
        };
      }
    });
    onCreateList(list);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Aanbevolen Items
          </h1>
          <p className="text-white/80">
            Selecteer wat je mee wilt nemen
          </p>
        </div>

        {/* Baggage info */}
        {airlineInfo && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/20">
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl">✈️</span>
              <span className="font-medium">Bagagelimiet:</span>
              <span>Handbagage: {airlineInfo.cabin}kg</span>
              <span className="mx-2">|</span>
              <span>Ruimbagage: {airlineInfo.checked}kg</span>
            </div>
          </div>
        )}

        {/* Stats bar */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/20 sticky top-4 z-10">
          <div className="flex justify-between items-center text-white">
            <div>
              <span className="font-bold text-2xl">{selectedCount}</span>
              <span className="text-white/80 ml-2">items geselecteerd</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-2xl">{formatWeight(totalWeight)}</span>
              <span className="text-white/80 ml-2">totaal</span>
            </div>
          </div>
          {airlineInfo && totalWeight > airlineInfo.cabin * 1000 && (
            <div className="mt-2 text-amber-300 text-sm flex items-center gap-2">
              <span>⚠️</span>
              <span>Let op: Je overschrijdt de handbagage limiet!</span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-4 mb-24">
          {Object.entries(recommended).map(([categoryKey, category]) => {
            const isExpanded = expandedCategories[categoryKey] !== false;
            const selectedInCategory = Object.values(selectedItems[categoryKey] || {}).filter(Boolean).length;
            const categoryWeight = category.items.reduce((acc, item) => {
              if (selectedItems[categoryKey]?.[item.id]) {
                return acc + item.weight;
              }
              return acc;
            }, 0);

            return (
              <div
                key={categoryKey}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="w-full p-4 flex items-center justify-between text-white hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-semibold text-lg">{category.name}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                      {selectedInCategory}/{category.items.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white/60 text-sm">
                      {formatWeight(categoryWeight)}
                    </span>
                    <span className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>

                {/* Category items */}
                {isExpanded && (
                  <div className="px-4 pb-4">
                    <button
                      onClick={() => selectAllInCategory(categoryKey)}
                      className="text-white/60 text-sm hover:text-white mb-3 transition-colors"
                    >
                      {category.items.every(item => selectedItems[categoryKey]?.[item.id])
                        ? 'Deselecteer alles'
                        : 'Selecteer alles'}
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => toggleItem(categoryKey, item.id)}
                          className={`p-3 rounded-xl text-left transition-all flex items-center justify-between ${
                            selectedItems[categoryKey]?.[item.id]
                              ? 'bg-white text-indigo-600'
                              : 'bg-white/5 text-white hover:bg-white/10'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className={`text-sm ${
                            selectedItems[categoryKey]?.[item.id]
                              ? 'text-indigo-400'
                              : 'text-white/50'
                          }`}>
                            {formatWeight(item.weight)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Create list button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleCreateList}
              disabled={selectedCount === 0}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                selectedCount > 0
                  ? 'bg-white text-indigo-600 hover:shadow-lg hover:scale-105'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              Maak paklijst ({selectedCount} items)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
