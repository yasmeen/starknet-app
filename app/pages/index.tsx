import Head from 'next/head'
import { useBlock } from '@starknet-react/core'
import WalletBar from '../components/WalletBar'

export default function Home() {
  const { data, isLoading, isError } = useBlock({
    refetchInterval: 3000,
    blockIdentifier: 'latest',
  })
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <div className="p-6 w-64 bg-white shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-blue-500">StarkNet Dashboard</h1>
          <nav>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Transaction Data
            </a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Contract Analytics
            </a>
          </nav>
        </div>

        <div className="flex-1 p-10 text-2xl font-semibold text-gray-700">
          Content goes here...
        </div>
      </div>
    </>
  )
}
