import { useState, ChangeEvent } from 'react';
import { useAccount, useBalance } from '@starknet-react/core';

const Balance = () => {
  const [inputAddress, setInputAddress] = useState("");
  const { address } = useAccount();
  const { data, isLoading, error, refetch } = useBalance({ address: inputAddress || address });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Account Balance</h2>
      <input 
        className="border-2 border-gray-200 rounded px-3 py-2 mb-2 w-full"
        type="text"
        placeholder="Enter account address..."
        value={inputAddress}
        onChange={handleInputChange}
      />
      <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => refetch()}>Refetch</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {JSON.stringify(error)}</div>
      ) : (
        <p>Balance: {data?.formatted} {data?.symbol}</p>
      )}
    </div>
  );
};

export default Balance;
