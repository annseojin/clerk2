import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Seojin Home</h1>
      <div className="bg-grey-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="http://www.clerk.com"
          className="text-xl text-blue-700 font-bold mb-4 "
        >
          clerk.com
        </Link>

        <Link
          href="http:/api.github.com"
          className="text-xl text-blue-700 font-bold mb-4 "
        >
          api.github.com
        </Link>

        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-blue-700 font-bold mb-4 "
        >
          Backend API 활용
        </Link>

        <Link href="#" className="text-xl text-blue-700 font-bold mb-4 ">
          Github repository
        </Link>

        <Link href="#" className="text-xl text-blue-700 font-bold mb-4 ">
          Web service at vercel.com
        </Link>
      </div>
    </>
  )
}
