import './App.css';
import { useCoolMode } from './coolMode/useCoolMode';
import { ArrowIcon, BoltIcon, CashIcon, LockIcon, LoupeIcon } from './icons';


function App() {
  const checkRef = useCoolMode(["/bluecheck.svg"]);

  return (
    <div className="App">
      <div className='max-w-[400px] p-12 my-12 bg-white xs:rounded-[30px] xs:drop-shadow-[0_35px_35px_rgba(0,0,0,0.01)] text-center mx-auto'>
        <img src="/bluecheck.svg" className='w-20 h-20 mx-auto'/>
        <h1 className="pt-4 text-3xl">Blue Check</h1>
        <h2 className='text-gray-500'>8 USDC</h2>

        <div className="mt-8 text-left">
          <ul className='feature-list'>
            <li><CashIcon/>One time payment</li>
            <li><BoltIcon/>Quick delivery</li>
            <li><LoupeIcon/>Provable ownership</li>
            <li><LockIcon/>Secured by blockchain</li>
          </ul>
        </div>
        <div className='mt-4'><a href="#" className='mx-auto w-fit text-gray-500 hover:text-black flex whitepaper-link items-center mb-8'>Whitepaper <ArrowIcon/></a></div>
        <div ref={checkRef}><button className="buy-button">Buy Now</button></div>
      </div>
    </div>
  );
}

export default App;
