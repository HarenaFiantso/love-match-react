import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface FormData {
  firstName: string;
  secondName: string;
}

const LoveMatchForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    secondName: ''
  });
  
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCompatibility = (): void => {
    if (formData.firstName.trim() && formData.secondName.trim()) {
      setIsLoading(true);
      
      setTimeout(() => {
        const name1 = formData.firstName.toLowerCase().replace(/\s/g, '');
        const name2 = formData.secondName.toLowerCase().replace(/\s/g, '');
        
        let compatibility = 50;
        
        const commonLetters = name1.split('').filter(letter => name2.includes(letter));
        compatibility += commonLetters.length * 5;
        
        const lengthDiff = Math.abs(name1.length - name2.length);
        compatibility -= lengthDiff * 2;
        
        compatibility += Math.floor(Math.random() * 20) - 10;
        
        compatibility = Math.max(0, Math.min(100, compatibility));
        
        setResult(compatibility);
        setIsLoading(false);
        setShowResult(true);
      }, 2000);
    }
  };

  const resetForm = (): void => {
    setFormData({ firstName: '', secondName: '' });
    setResult(null);
    setShowResult(false);
    setIsLoading(false);
  };

  const getResultMessage = (score: number): string => {
    if (score >= 80) return "💕 Match parfait ! Vous êtes faits l'un pour l'autre !";
    if (score >= 60) return "❤️ Très bonne compatibilité ! L'amour est dans l'air !";
    if (score >= 40) return "💖 Compatibilité moyenne, mais l'amour peut tout surmonter !";
    return "💙 Pas de panique, l'amour véritable ne se calcule pas !";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-105">
        
        {isLoading ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="relative">
                <Heart className="w-16 h-16 text-red-500 mx-auto fill-current animate-bounce" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Calcul en cours...</h2>
            <p className="text-gray-600 mb-4">
              Analyse de la compatibilité entre<br />
              <span className="font-semibold text-pink-600">{formData.firstName}</span> et{' '}
              <span className="font-semibold text-pink-600">{formData.secondName}</span>
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        ) : !showResult ? (
          <>
            <div className="text-center mb-8">
              <div className="mb-4">
                <Heart className="w-16 h-16 text-red-500 mx-auto fill-current animate-pulse" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Love Match</h1>
              <p className="text-gray-500 text-sm">Découvrez votre compatibilité</p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Premier prénom"
                  className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-center text-lg transition-all duration-200"
                />
              </div>
              
              <div className="flex justify-center">
                <Heart className="w-6 h-6 text-pink-400 fill-current" />
              </div>
              
              <div>
                <input
                  type="text"
                  name="secondName"
                  value={formData.secondName}
                  onChange={handleInputChange}
                  placeholder="Deuxième prénom"
                  className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-center text-lg transition-all duration-200"
                />
              </div>
              
              <button
                onClick={calculateCompatibility}
                disabled={!formData.firstName.trim() || !formData.secondName.trim()}
                className="w-full bg-gradient-to-r from-pink-400 to-red-400 text-white py-4 rounded-2xl font-semibold text-lg hover:from-pink-500 hover:to-red-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Tester la compatibilité →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <div className="mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={result! >= 60 ? "#ef4444" : result! >= 40 ? "#f59e0b" : "#6b7280"}
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2.83 * result!} 283`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800">{result}%</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {formData.firstName} ❤️ {formData.secondName}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 px-4">
                {getResultMessage(result!)}
              </p>
              
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-pink-400 to-red-400 text-white py-3 px-8 rounded-2xl font-semibold hover:from-pink-500 hover:to-red-500 transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Nouveau test
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoveMatchForm;