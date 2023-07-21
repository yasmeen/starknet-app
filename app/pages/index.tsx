import Head from 'next/head'
import { useBlock } from '@starknet-react/core'
import Balance from '@/components/Balance' // make sure to adjust the import path
import StarkName from '@/components/StarkName'

export default function Home() {
  const { data, isLoading, isError } = useBlock({
    refetchInterval: 3000,
    blockIdentifier: 'latest',
  })

  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <div className="p-6 w-64 bg-white shadow-md">
          <h1 className="text-xl font-bold mb-4">StarkNet Dashboard</h1>
          <nav>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
              Transaction Data
            </a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">
              Contract Analytics
            </a>
          </nav>
        </div>

        <div className="flex-1 p-10 text-2xl font-bold">
          <Balance />
          <StarkName />
        </div>
      </div>
    </>
  )
}
