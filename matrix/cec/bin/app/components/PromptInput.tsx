
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
      <label htmlFor="description" className="block text-lg font-medium text-amber-200 mb-2">
        Describe Your Desired Raku Finish
      </label>
      <textarea
        id="description"
        rows={4}
        className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 placeholder-gray-500"
        placeholder="e.g., 'A vibrant copper penny finish with deep red flashes and fine crazing...'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="mt-4 w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isLoading ? (
          'Crafting Your Plan...'
        ) : (
          <>
            <SparklesIcon />
            <span className="ml-2">Generate Firing Plan</span>
          </>
        )}
      </button>
    </form>
  );
};

export default PromptInput;
