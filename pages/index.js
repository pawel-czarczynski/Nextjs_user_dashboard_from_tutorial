import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'

export default function Home() {
  return (
    <>
    <Head>
      <title>Next.js Dashboard</title>
    </Head>
    <main className=" bg-gray-100 min-h-screen ">
      <Header />
      <TopCards />
      <div className='grid p-4 md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </main>
    </>
  )
}
