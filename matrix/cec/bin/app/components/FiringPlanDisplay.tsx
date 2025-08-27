
import React from 'react';
import type { FiringPlan } from '../types';
import FlameIcon from './icons/FlameIcon';
import WarningIcon from './icons/WarningIcon';
import PaletteIcon from './icons/PaletteIcon';
import WindIcon from './icons/WindIcon';
import SnowflakeIcon from './icons/SnowflakeIcon';

interface FiringPlanDisplayProps {
  plan: FiringPlan;
}

interface SectionCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children }) => (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-lg p-6 mb-6 shadow-lg border border-gray-700">
      <h3 className="text-2xl font-bold text-amber-300 mb-4 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
      <div className="text-gray-300 space-y-3 prose prose-invert max-w-none prose-p:my-1 prose-strong:text-amber-200">{children}</div>
    </div>
);

const FiringPlanDisplay: React.FC<FiringPlanDisplayProps> = ({ plan }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 mb-8">
        {plan.title}
      </h2>

      <SectionCard title="Glaze Application" icon={<PaletteIcon />}>
        <p>{plan.glazeNotes}</p>
      </SectionCard>

      <SectionCard title="Firing Schedule" icon={<FlameIcon />}>
        <p><strong>Ramp Up:</strong> {plan.firingSchedule.rampUp}</p>
        <p><strong>Target Temperature:</strong> {plan.firingSchedule.topTemperature}</p>
        <p><strong>Visual Cues:</strong> {plan.firingSchedule.visualCues}</p>
      </SectionCard>
      
      <SectionCard title="Reduction Process" icon={<WindIcon />}>
        <p><strong>Combustibles:</strong> {plan.reductionProcess.materials}</p>
        <p><strong>Procedure:</strong> {plan.reductionProcess.steps}</p>
        <p><strong>Duration:</strong> {plan.reductionProcess.duration}</p>
      </SectionCard>

      <SectionCard title="Cooling & Finishing" icon={<SnowflakeIcon />}>
        <p>{plan.cooling}</p>
      </SectionCard>
      
      <div className="bg-red-900/50 border-2 border-red-500 rounded-lg p-6 mb-6 shadow-2xl">
         <h3 className="text-2xl font-bold text-red-200 mb-4 flex items-center">
          <WarningIcon />
          <span className="ml-3">Crucial Safety Precautions</span>
        </h3>
        <ul className="list-disc list-inside text-red-100 space-y-2">
          {plan.safetyPrecautions.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default FiringPlanDisplay;
