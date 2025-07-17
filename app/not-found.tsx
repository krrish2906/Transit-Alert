import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
    return (
        <div className='h-[calc(100vh-4rem)] bg-white flex flex-col items-center pt-5'>
            <Image
                src={'/404Error.svg'}
                alt='404'
                width={100}
                height={100}
                className='size-120'
            />
            <Link href="/" className='text-white bg-[#6dbdff] rounded-md text-base font-semibold py-2 px-4'>
                Return Home
            </Link>
        </div>
    )
}