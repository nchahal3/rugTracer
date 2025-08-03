import { useState } from 'react';
import TokenForm from '../components/TokenForm';
import Results from '../components/Results';

const Home = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [scanResults, setScanResults] = useState(null);

  const handleScan = async (address) => {
    setTokenAddress(address);
    // Call the backend API to scan the token address
    const response = await fetch('/api/scan-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenAddress: address }),
    });

    if (response.ok) {
      const data = await response.json();
      setScanResults(data);
    } else {
      console.error('Failed to scan token');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">RugTrace – Token Rug Scanner</h1>
      <TokenForm onScan={handleScan} />
      {scanResults && <Results rugScore={scanResults.rugScore} flags={scanResults.flags} />}
    </div>
  );
};

export default Home;