import { useState } from 'react';

export default function LoveForms() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [randomPercentage, setRandomPercentage] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCalculation = () => {
    if (firstName && secondName) {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
      const randomPercentage = Math.floor(Math.random() * 100);
      setRandomPercentage(randomPercentage);
      setShowResult(true);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[550px] items-center justify-center flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-200">
        <div className="text-6xl">❤️</div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="flex h-[550px] items-center justify-center flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-200">
        <div className="text-6xl">{randomPercentage}%</div>
        <button
          onClick={() => {
            setShowResult(false);
            setFirstName('');
            setSecondName('');
          }}
          className="bg-pink-400 cursor-pointer mt-8 w-full text-white rounded-md px-2 py-4"
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleCalculation}
      className="flex h-[550px] flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-200"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <img src="/heart.png" alt="Heart image" width={80} />
        <h2 className="text-3xl">Love Match</h2>
        <p className="text-1xl text-gray-500 mb-2">Découvrez votre compatibilité</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Premier prénom"
          className="bg-gray-100 p-4 w-full rounded-md outline-pink-200"
        />
        <img src="/heart.png" alt="Heart image" width={32} />

        <input
          onChange={(e) => setSecondName(e.target.value)}
          value={secondName}
          type="text"
          name="secondName"
          id="secondName"
          placeholder="Deuxième prénom"
          className="bg-gray-100 p-4 w-full rounded-md outline-pink-200"
        />
        <button className="bg-pink-400 cursor-pointer mt-8 w-full text-white rounded-md px-2 py-4">
          Tester la compatibilité
        </button>
      </div>
    </form>
  );
}
