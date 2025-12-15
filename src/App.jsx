import { useState, useEffect } from 'react';
import Questionnaire from './components/Questionnaire';
import Suggestions from './components/Suggestions';
import PackingList from './components/PackingList';
import './index.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [answers, setAnswers] = useState(null);
  const [packingList, setPackingList] = useState(null);

  // Load saved list from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('packingList');
    const savedAnswers = localStorage.getItem('tripAnswers');
    if (saved && savedAnswers) {
      setPackingList(JSON.parse(saved));
      setAnswers(JSON.parse(savedAnswers));
      setScreen('list');
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (packingList) {
      localStorage.setItem('packingList', JSON.stringify(packingList));
    }
    if (answers) {
      localStorage.setItem('tripAnswers', JSON.stringify(answers));
    }
  }, [packingList, answers]);

  const handleQuestionnaireComplete = (newAnswers) => {
    setAnswers(newAnswers);
    setScreen('suggestions');
  };

  const handleCreateList = (list) => {
    setPackingList(list);
    setScreen('list');
  };

  const handleStartOver = () => {
    localStorage.removeItem('packingList');
    localStorage.removeItem('tripAnswers');
    setPackingList(null);
    setAnswers(null);
    setScreen('start');
  };

  if (screen === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl mb-6">🧳</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Paklijst Generator
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Nooit meer vergeten wat je mee moet nemen. Beantwoord een paar vragen
            en krijg een gepersonaliseerde paklijst voor jouw reis.
          </p>
          <button
            onClick={() => setScreen('questionnaire')}
            className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            Start de vragenlijst
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'questionnaire') {
    return <Questionnaire onComplete={handleQuestionnaireComplete} />;
  }

  if (screen === 'suggestions') {
    return <Suggestions answers={answers} onCreateList={handleCreateList} />;
  }

  if (screen === 'list') {
    return (
      <PackingList
        initialList={packingList}
        onBack={() => {
          if (confirm('Wil je opnieuw beginnen? Je huidige lijst wordt verwijderd.')) {
            handleStartOver();
          }
        }}
      />
    );
  }

  return null;
}

export default App;
