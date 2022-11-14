import { ArrowUpRightIcon, BanknotesIcon, BoltIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function InfoSection({ completed }: { completed?: boolean }) {
    return (
        <>
          { completed ? 
            <div className="my-8">Purchase completed. You now have a blue check!</div> :
            <>
              <div className="mt-8 text-left">
                <ul className='feature-list'>
                  <li><BanknotesIcon className='w-6 h-6'/>One time payment</li>
                  <li><BoltIcon className='w-6 h-6'/>Quick delivery</li>
                  <li><MagnifyingGlassIcon className='w-6 h-6'/>Provable ownership</li>
                  <li><LockClosedIcon className='w-6 h-6'/>Secured by blockchain</li>
                </ul>
              </div>
              <div className='mt-4 mb-8 flex w-max mx-auto space-x-2'>
                <a href="https://unsplash.com/photos/oCdG2sTjDDQ" className='text-gray-500 hover:text-black flex whitepaper-link items-center w-fit'>Whitepaper <ArrowUpRightIcon/></a>
                <a href="https://opensea.io/collection/official-blue-check" className='text-gray-500 hover:text-black flex whitepaper-link items-center w-fit'>OpenSea <ArrowUpRightIcon/></a>
              </div>
            </>
          }
        </>
    )
}