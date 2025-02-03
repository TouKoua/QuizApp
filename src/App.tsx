import React, { useState, useRef } from 'react';
import { Music2, Award, RefreshCw, Play, Pause } from 'lucide-react';
import { questions } from './data';
import type { QuizState } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    showResult: false,
    answers: {},
    isPlaying: false,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentQuestion = questions[quizState.currentQuestion];

  const togglePlay = () => {
    if (audioRef.current) {
      if (quizState.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setQuizState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    }
  };

  const handleAnswer = (answer: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const newAnswers = { ...quizState.answers, [currentQuestion.id]: answer };
    const isCorrect = answer === currentQuestion.correctAnswer;

    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      currentQuestion: prev.currentQuestion + 1,
      showResult: prev.currentQuestion === questions.length - 1,
      answers: newAnswers,
      isPlaying: false,
    }));
  };

  const resetQuiz = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setQuizState({
      currentQuestion: 0,
      score: 0,
      showResult: false,
      answers: {},
      isPlaying: false,
    });
  };

  if (quizState.showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your Score: {quizState.score} out of {questions.length}
            </p>
            <div className="space-y-4 mb-8">
              {questions.map((q, index) => (
                <div key={q.id} className="text-left p-4 rounded-lg bg-gray-50">
                  <p className="font-medium text-gray-800">
                    {index + 1}. {q.songTitle} ({q.year})
                  </p>
                  <p className="text-sm text-gray-600">
                    Your answer: <span className={quizState.answers[q.id] === q.correctAnswer ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {quizState.answers[q.id]}
                    </span>
                  </p>
                  {quizState.answers[q.id] !== q.correctAnswer && (
                    <p className="text-sm text-green-600">
                      Correct answer: {q.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Music2 className="w-10 h-10 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-3">Song Quiz</h1>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {quizState.currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-purple-600">
              Score: {quizState.score}
            </span>
          </div>
          
          <div className="space-y-4">
            <audio
              ref={audioRef}
              src={currentQuestion.audioUrl}
              onEnded={() => setQuizState(prev => ({ ...prev, isPlaying: false }))}
            />
            
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={togglePlay}
                className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                {quizState.isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
              <p className="text-sm text-gray-600">
                Click to {quizState.isPlaying ? 'pause' : 'play'} the song
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Who performed this song?
            </h2>
            
            <div className="grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;