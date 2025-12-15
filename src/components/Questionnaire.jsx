import { useState } from 'react';
import { questions } from '../data/questions';

export default function Questionnaire({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  // Filter vragen op basis van condities
  const visibleQuestions = questions.filter(q => {
    if (!q.condition) return true;
    return q.condition(answers);
  });

  const currentQuestion = visibleQuestions[currentStep];
  const progress = ((currentStep + 1) / visibleQuestions.length) * 100;

  const handleSelect = (value) => {
    if (currentQuestion.type === 'single') {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    } else {
      const current = answers[currentQuestion.id] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: updated }));
    }
  };

  const isSelected = (value) => {
    if (currentQuestion.type === 'single') {
      return answers[currentQuestion.id] === value;
    }
    return (answers[currentQuestion.id] || []).includes(value);
  };

  const canProceed = () => {
    if (currentQuestion.type === 'single') {
      return !!answers[currentQuestion.id];
    }
    return (answers[currentQuestion.id] || []).length > 0;
  };

  const handleNext = () => {
    if (currentStep < visibleQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>Vraag {currentStep + 1} van {visibleQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {currentQuestion.question}
          </h2>

          {/* Options grid */}
          <div className={`grid gap-3 mb-8 ${
            currentQuestion.options.length <= 4 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
          }`}>
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 transform hover:scale-105 ${
                  isSelected(option.value)
                    ? 'bg-white text-indigo-600 shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  {option.icon && <span className="text-2xl">{option.icon}</span>}
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Multiple select hint */}
          {currentQuestion.type === 'multiple' && (
            <p className="text-white/60 text-center text-sm mb-6">
              Je kunt meerdere opties selecteren
            </p>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 py-4 rounded-2xl font-semibold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20"
              >
                Terug
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 py-4 rounded-2xl font-semibold transition-all ${
                canProceed()
                  ? 'bg-white text-indigo-600 hover:shadow-lg hover:scale-105'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              {currentStep === visibleQuestions.length - 1 ? 'Bekijk suggesties' : 'Volgende'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
