import React, { useState, useCallback } from 'react';
import type { Movie } from './types';
import { MOVIES } from './constants';
import MovieSelector from './components/MovieSelector';
import PromptDisplay from './components/PromptDisplay';
import CustomInputs from './components/CustomInputs';
import { generatePrompt } from './services/geminiService';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMovieSelectorExpanded, setIsMovieSelectorExpanded] = useState(false);
  const [showCustomInputs, setShowCustomInputs] = useState(false);
  const [customSceneSetup, setCustomSceneSetup] = useState('');
  const [customTimelineAction, setCustomTimelineAction] = useState('');


  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setGeneratedPrompt('');
    setError(null);
    setCustomTimelineAction('');
    setCustomSceneSetup('');
  };

  const handleGeneratePrompt = useCallback(async () => {
    if (!selectedMovie) {
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');
    try {
      const prompt = await generatePrompt(
        selectedMovie,
        customSceneSetup,
        customTimelineAction,
      );
      setGeneratedPrompt(prompt);
    } catch (e) {
      console.error(e);
      setError((e as Error).message || 'Failed to generate prompt.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedMovie, customSceneSetup, customTimelineAction]);
  
  const isGenerateButtonDisabled = !selectedMovie || isLoading;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <main className="max-w-4xl mx-auto p-4 sm:p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
            Sora2 시네마틱 프롬프트
          </h1>
        </header>

        <div className="my-8 border-t border-gray-700/50"></div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">1. 영화 선택</h2>
          <MovieSelector 
            movies={MOVIES} 
            selectedMovie={selectedMovie} 
            onSelectMovie={handleSelectMovie}
            isExpanded={isMovieSelectorExpanded}
            onToggleExpand={() => setIsMovieSelectorExpanded(!isMovieSelectorExpanded)}
          />
        </section>

        <div className="my-8 border-t border-gray-700/50"></div>

        <section className="text-center my-12">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">2. 프롬프트 생성</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              영화를 선택하고, "상상하기"를 누르면 자동으로 프롬프트가 생성됩니다.
              <br />
              "선택사항"을 누르면 장면묘사와 액션을 지정 할 수 있어요
            </p>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setShowCustomInputs(!showCustomInputs)}
              className="px-8 py-3 text-lg font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50 bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              {showCustomInputs ? '옵션 숨기기' : '선택사항'}
            </button>
            <button
              onClick={handleGeneratePrompt}
              disabled={isGenerateButtonDisabled}
              className={`px-8 py-3 text-lg font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50
              ${isGenerateButtonDisabled
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:shadow-cyan-500/40'
              }`}
            >
              {isLoading ? '생성 중...' : '상상하기'}
            </button>
          </div>
        </section>

        {showCustomInputs && selectedMovie && (
          <section className="mb-8">
              <CustomInputs
                  sceneSetup={customSceneSetup}
                  onSceneSetupChange={setCustomSceneSetup}
                  timelineAction={customTimelineAction}
                  onTimelineActionChange={setCustomTimelineAction}
              />
          </section>
        )}
        
        <section>
          <PromptDisplay prompt={generatedPrompt} isLoading={isLoading} error={error} />
        </section>

      </main>
    </div>
  );
};

export default App;