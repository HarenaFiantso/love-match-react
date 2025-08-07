import { SplitText } from './components';

export default function App() {
  return (
    <main className='bg-yellow-100 flex flex-col w-full h-screen justify-center items-center'>
      <div className='bg-white flex flex-col w-[40vw] rounded-lg justify-center items-center px-4 py-6 gap-8 shadow-lg'>
        <img className='w-[50px] h-[50px]' src="/public/heart.png" alt="" />
        <h1 className='text-3xl font-bold text-blue-500'>Love Match</h1>
        <p>Decouvrez votre compatibilité</p>
        <input className='border rounded-lg py-1' id='Name1' type="text" />
        <input className='border rounded-lg py-1' id='Name2' type="text" />
        <button className='border border-black-800 bg-blue-500 text-white font-bold rounded-[5px] px-[70px] py-[5px] hover:bg-white hover:text-blue-500 hover:border-blue-500'>Submit</button>
      </div>
    </main>
  );
}
