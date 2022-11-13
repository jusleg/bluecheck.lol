import { useDynamicContext } from '@dynamic-labs/sdk-react';
import './App.css';
import { Authenticated } from './components/Authenticated';
import { Unauthenticated } from './components/Unauthenticated';


function App() {
  const { user } = useDynamicContext();


  return (
    <div className="App">
      <div className="m-auto w-full">
        <div className='block max-w-[400px] p-12 my-12 bg-white xs:rounded-[30px] xs:drop-shadow-[0_35px_35px_rgba(0,0,0,0.01)] text-center mx-auto'>
          <img src="/bluecheck.svg" className='w-20 h-20 mx-auto' alt="blue check"/>
          <h1 className="pt-4 text-3xl">Blue Check</h1>
          <h2 className='text-gray-500'>0.0042069 ETH</h2>
          { user ? <Authenticated /> : <Unauthenticated /> }
        </div>
      </div>
    </div>
  );
}

export default App;
