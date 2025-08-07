import React, { useState } from 'react';
import {
  Heart,
  Users,
  RefreshCw,
  Sparkles,
  UserCheck,
  Flame,
  Star,
  Zap,
} from 'lucide-react';

interface LoveResult {
  score: number;
  message: string;
  emoji: string;
}

interface FormData {
  name1: string;
  name2: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name1: '', name2: '' });
  const [result, setResult] = useState<LoveResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Test compatibility:', formData);
  };

  const handleReset = () => {
    setFormData({ name1: '', name2: '' });
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl font-bold text-gray-800 mx-2">Love Match</h1>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <p className="text-gray-600 text-lg font-medium">
              Découvrez votre compatibilité amoureuse
            </p>
          </div>
        </div>

        {/* Card principale */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            {/* Premier prénom */}
            <div className="relative">
              <label htmlFor="name1" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                Premier prénom
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name1"
                  name="name1"
                  value={formData.name1}
                  onChange={handleInputChange}
                  placeholder="Entrez le premier prénom..."
                  className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 text-gray-800 placeholder-gray-400"
                />
                <UserCheck className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
              </div>
            </div>

            {/* Deuxième prénom */}
            <div className="relative">
              <label htmlFor="name2" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                Deuxième prénom
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name2"
                  name="name2"
                  value={formData.name2}
                  onChange={handleInputChange}
                  placeholder="Entrez le deuxième prénom..."
                  className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 text-gray-800 placeholder-gray-400"
                />
                <UserCheck className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
              </div>
            </div>

            {/* Boutons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.name1.trim() || !formData.name2.trim() || isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span>Calcul en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Tester la compatibilité !</span>
                  </>
                )}
              </button>

              {(formData.name1 || formData.name2) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400"
                >
                  <span>Recommencer</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <p className="text-gray-500 text-sm">Fait avec beaucoup d'amour et un peu de magie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
