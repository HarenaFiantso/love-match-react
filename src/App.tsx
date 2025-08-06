import React, { useState } from 'react';
import Logo from './assets/love.png';

export default function App() {
  const [username, setUsername] = useState('');
  const [otherUsername, setOtherUsername] = useState('');
  const [matchScore, setMatchScore] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.target;
    if (name === 'name') {
      setUsername(value);
    } else if (name === 'otherName') {
      setOtherUsername(value);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && otherUsername) {
      const score = Math.floor(Math.random() * 101); // Random score between 0 and 100
      setMatchScore(score);
      
    } else {
      alert('Please enter both names.');
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className='flex flex-col border border-gray-300 rounded p-4 shadow-2xl' action="">
        <img className='w-40 h-40 mx-auto' src={Logo} alt="" />
        <h1 className="text-3xl font-bold text-center mb-4">Love Match</h1>
        <p className="text-center mb-6">Find your perfect match!</p>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Your Name:</label>
          <input type="text" id="name" name="name" value={username} className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} required />

          <label htmlFor="otherName">Your crush Name</label>
          <input type="text" name="otherName" id="otherName" value={otherUsername} className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} required />
        </div>
        <button className=" cursor-pointer bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
        
        {matchScore > 0 && (
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold">Your Match Score</h2>
            <p className="text-xl">{matchScore}%</p>
          </div>
        )}
      </form>
    </main>
  );
}
