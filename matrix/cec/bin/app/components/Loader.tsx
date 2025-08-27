
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 border-4 border-t-amber-500 border-r-amber-500 border-b-gray-700 border-l-gray-700 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-amber-200">Forging your plan in the digital kiln...</p>
    </div>
  );
};

export default Loader;
