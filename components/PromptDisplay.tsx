import React, { useState } from 'react';

interface PromptDisplayProps {
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, isLoading, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-gray-800/80 rounded-lg p-6 flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-900/50 border border-red-700 rounded-lg p-6 text-center">
        <p className="text-red-300">오류가 발생했습니다: {error}</p>
      </div>
    );
  }

  if (!prompt) {
    return null;
  }

  return (
    <div className="w-full bg-gray-800/80 rounded-lg p-4 sm:p-6 relative shadow-inner">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        {copied ? '복사됨!' : '복사'}
      </button>
      <p className="text-gray-200 whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {prompt}
      </p>
    </div>
  );
};

export default PromptDisplay;
