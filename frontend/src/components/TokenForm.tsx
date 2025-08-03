import React, { useState } from 'react';

const TokenForm: React.FC<{ onScan: (tokenAddress: string) => void }> = ({ onScan }) => {
  const [tokenAddress, setTokenAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenAddress) {
      onScan(tokenAddress);
      setTokenAddress('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        placeholder="Enter token address"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Scan
      </button>
    </form>
  );
};

export default TokenForm;