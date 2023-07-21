import { useAccount, useStarkName } from '@starknet-react/core';

const StarkName = () => {
  const { address } = useAccount();

  if (!address) {
    return <div>Loading account...</div>;
  }

  const { data, isLoading, isError } = useStarkName({ address });

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">StarkName</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching StarkName.</p>
      ) : (
        <p>StarkName: {data}</p>
      )}
    </div>
  );
};

export default StarkName;
