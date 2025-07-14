import React, { useState } from 'react';

const topics = [
  'Ages',
  'Average',
  'BoatStreams',
  'Hcmlcm',
  // Add more topics as needed
];

const levels = ['Easy', 'Medium', 'Hard'];

const AptitudeGenerator = () => {
  const [topic, setTopic] = useState(topics[0]);
  const [level, setLevel] = useState(levels[0]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setQuestions([]);
    setSelectedAnswers({});
    setShowExplanation({});
    try {
      const response = await fetch('https://adyakarmabackend.onrender.com/ai/aiPractice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, level }),
      });
      if (!response.ok) throw new Error('Failed to fetch questions');
      const data = await response.json();
      console.log('API response:', data);
      // Accept both array and { questions: [...] }
      if (Array.isArray(data)) {
        setQuestions(data);
      } else if (Array.isArray(data.questions)) {
        setQuestions(data.questions);
      } else {
        setQuestions([]);
        setError('API did not return a list of questions.');
      }
    } catch (err) {
      setError('Could not load questions. ' + (err && err.message ? err.message : ''));
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (qIdx, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: option }));
  };

  const toggleExplanation = (qIdx) => {
    setShowExplanation((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  // Defensive: ensure questions is always an array
  const safeQuestions = Array.isArray(questions) ? questions : [];

  return (
    <div className="max-w-2xl mx-auto p-2 sm:p-4 w-full relative">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Generate Aptitude Questions</h2>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col sm:flex-row sm:items-end gap-4 w-full">
        <div className="flex-1 flex flex-col">
          <label className="font-medium mb-1">Topic:</label>
          <select
            className="border rounded p-2 w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex flex-col">
          <label className="font-medium mb-1">Level:</label>
          <select
            className="border rounded p-2 w-full"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {levels.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Questions'}
        </button>
      </form>
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      <div className="space-y-6">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className="border rounded p-4 bg-white shadow w-full animate-pulse flex flex-col gap-3"
              >
                <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
                <div className="flex flex-col gap-2">
                  {['A', 'B', 'C', 'D'].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-200" />
                      <div className="h-3 w-1/2 bg-gray-200 rounded" />
                    </div>
                  ))}
                </div>
                <div className="h-3 w-1/3 bg-gray-200 rounded mt-3" />
              </div>
            ))
          : safeQuestions.map((q, idx) => {
              const userAnswer = selectedAnswers[idx];
              const isCorrect = userAnswer && userAnswer === q.correct;
              return (
                <div key={idx} className="border rounded p-4 bg-white shadow w-full">
                  <div className="font-semibold mb-2 text-base sm:text-lg">Q{idx + 1}: {q.question}</div>
                  <div className="space-y-2">
                    {Object.entries(q.options).map(([opt, text]) => (
                      <label
                        key={opt}
                        className={`block p-2 rounded cursor-pointer border transition-colors text-sm sm:text-base ${
                          userAnswer
                            ? opt === userAnswer
                              ? isCorrect
                                ? 'bg-green-100 border-green-500'
                                : 'bg-red-100 border-red-500'
                              : 'border-gray-200'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${idx}`}
                          value={opt}
                          checked={userAnswer === opt}
                          onChange={() => handleAnswer(idx, opt)}
                          className="mr-2"
                        />
                        {opt}: {text}
                      </label>
                    ))}
                  </div>
                  {userAnswer && (
                    <button
                      className="mt-2 text-blue-600 underline"
                      onClick={() => toggleExplanation(idx)}
                      type="button"
                    >
                      {showExplanation[idx] ? 'Hide' : 'Show'} Explanation
                    </button>
                  )}
                  {userAnswer && showExplanation[idx] && (
                    <div className="mt-2 p-2 bg-gray-50 border-l-4 border-blue-400 text-sm sm:text-base">
                      <strong>Explanation:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default AptitudeGenerator; 