import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isValidName, calculateLoveMatch } from '../logic/loveMatch';

export default function LoveForms() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [matchPercentage, setMatchPercentage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const handleCalculation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');

    if (!isValidName(firstName) || !isValidName(secondName)) {
      setError('Please enter valid names');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const percentage = calculateLoveMatch(firstName, secondName);
      setMatchPercentage(percentage);
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="flex h-[550px] items-center justify-center flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-200"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="text-6xl"
          >
            <img src="/heart.png" width={35} alt="heart" />
          </motion.div>
        </motion.div>
      ) : showResult ? (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="flex h-[550px] items-center justify-center flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-200"
        >
          <motion.img
            src="/heart.png"
            width={50}
            className="pb-6"
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          />
          <div className="pb-3">Love match :</div>
          <div className="text-2xl mb-5 text-center">
            {firstName} & {secondName}
          </div>
          <div className="text-8xl my-5 font-bold bg-gradient-to-r from-red-500 via-pink-400 to-pink-700 text-transparent bg-clip-text animate-gradient bg-300%">
            {matchPercentage}%
          </div>
          <motion.button
            onClick={() => {
              setShowResult(false);
              setFirstName('');
              setSecondName('');
              setMatchPercentage(null);
              setError('');
            }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-red-500 via-red-700-400 to-pink-400 hover:via-pink-600  cursor-pointer mt-5 w-70 text-white rounded-md px-2 py-4 transition-opacity shadow-lg shadow-pink-300"
          >
            Retry
          </motion.button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleCalculation}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex h-[520px] flex-col w-[400px] bg-white px-8 py-10 rounded-2xl shadow-2xl shadow-pink-300"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-5">
            <motion.img
              src="/heart.png"
              width={45}
              className="pb-2"
              alt=""
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            />

            <h2 className="text-3xl">Love Match</h2>
            <p className="text-1xl text-gray-500 mb-2">Find out your compatibility</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <motion.input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Name 1"
              className="bg-gray-100 p-4 w-70 text-center rounded-2xl outline-pink-200 shadow-lg shadow-pink-200"
              whileFocus={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <img src="/heart.png" alt="Heart image" width={28} />
            <motion.input
              onChange={(e) => setSecondName(e.target.value)}
              value={secondName}
              type="text"
              name="secondName"
              id="secondName"
              placeholder="Name 2"
              className="bg-gray-100 p-4 w-70 text-center rounded-2xl outline-pink-200 shadow-lg shadow-pink-200"
              whileFocus={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-red-500 via-red-700-400 to-pink-400 hover:via-pink-600  cursor-pointer mt-8 w-70 text-white rounded-md px-2 py-4 transition-opacity shadow-lg shadow-pink-300"
            >
              Test your compatibility
            </motion.button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
