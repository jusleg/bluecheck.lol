import { ArrowIcon, BoltIcon, CashIcon, LockIcon, LoupeIcon } from "../icons";

export function InfoSection({ completed }: { completed?: boolean }) {
    return (
        <>
          { completed ? 
            <div className="my-8">Purchase completed. You now have a blue check!</div> :
            <>
              <div className="mt-8 text-left">
                <ul className='feature-list'>
                  <li><CashIcon/>One time payment</li>
                  <li><BoltIcon/>Quick delivery</li>
                  <li><LoupeIcon/>Provable ownership</li>
                  <li><LockIcon/>Secured by blockchain</li>
                </ul>
              </div>
              <div className='mt-4 mb-8 flex w-max mx-auto space-x-2'>
                <a href="https://unsplash.com/photos/oCdG2sTjDDQ" className='text-gray-500 hover:text-black flex whitepaper-link items-center w-fit'>Whitepaper <ArrowIcon/></a>
                <a href="https://opensea.io/collection/official-blue-check" className='text-gray-500 hover:text-black flex whitepaper-link items-center w-fit'>OpenSea <ArrowIcon/></a>
              </div>
            </>
          }
        </>
    )
}