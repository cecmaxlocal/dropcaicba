
import React, { useState } from 'react';
import type { FiringPlan } from './types';
import { generateFiringPlan } from './services/geminiService';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import FiringPlanDisplay from './components/FiringPlanDisplay';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [firingPlan, setFiringPlan] = useState<FiringPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = async () => {
    if (!prompt.trim()) {
      setError('Please describe your desired Raku finish.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setFiringPlan(null);

    try {
      const plan = await generateFiringPlan(prompt);
      setFiringPlan(plan);
    } catch (err) {
      console.error(err);
      setError(
        'Failed to generate firing plan. Please check your connection or API key and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 to-slate-800 text-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <main>
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGeneratePlan}
            isLoading={isLoading}
          />
          <div className="mt-8">
            {isLoading && <Loader />}
            {error && <ErrorDisplay message={error} />}
            {firingPlan && <FiringPlanDisplay plan={firingPlan} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
