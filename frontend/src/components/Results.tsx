import React from 'react';

interface ResultsProps {
  rugScore: number;
  flags: {
    mintable: boolean;
    lpLocked: boolean;
    highTax: boolean;
  };
}

const Results: React.FC<ResultsProps> = ({ rugScore, flags }) => {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Rug Score: {rugScore}</h2>
      <ul className="mt-2">
        <li>{flags.mintable ? '❌ Mintable' : '✅ Not Mintable'}</li>
        <li>{flags.lpLocked ? '✅ LP Locked' : '❌ No LP Lock'}</li>
        <li>{flags.highTax ? '❌ High Tax' : '✅ Low Tax'}</li>
      </ul>
    </div>
  );
};

export default Results;