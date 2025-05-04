import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Navbar(props: Props) {
  return (
    <>
      <div className="w-full fixed top-0 flex p-2 bg-red-500 items-center">
        <Link href="/">
          <div className="rounded-xl bg-white p-[7px] cursor-pointer hover:bg-gray-200">
            <Image
              src="/kicker-icon.png"
              width={30}
              height={30}
              alt="kicker icon"
            />
          </div>
        </Link>

        <div className="flex h-full text-bold text-lg ml-12 text-white gap-8 divide-solid divide-red-900">
          <Link href="/">HOME</Link>
          <Link href="/users">USERS</Link>
          <Link href="/matches">MATCHES</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
