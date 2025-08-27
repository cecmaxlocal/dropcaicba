
import React from 'react';
import WarningIcon from './icons/WarningIcon';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg relative flex items-center" role="alert">
      <WarningIcon />
      <span className="block sm:inline ml-3">{message}</span>
    </div>
  );
};

export default ErrorDisplay;
