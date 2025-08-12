import React, { useState } from 'react';
import {
  Heart,
  Users,
  RefreshCw,
  Sparkles,
  UserCheck,
  Star,
  Zap,
} from 'lucide-react';

// Constantes réutilisables
const VOWELS = 'aeiou';

// Fonction pour calculer la compatibilité
const calculateLoveCompatibility = (name1, name2) => {
  const cleanName1 = name1.trim().toLowerCase();
  const cleanName2 = name2.trim().toLowerCase();
  const combined = cleanName1 + cleanName2;

  let score = 0;

  // Facteur 1: Longueur des noms
  score += (cleanName1.length + cleanName2.length) % 100;

  // Facteur 2: Lettres communes
  const commonLetters = cleanName1.split('').filter(letter => cleanName2.includes(letter)).length;
  score += commonLetters * 5;

  // Facteur 3: Somme ASCII
  const asciiSum = combined.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  score += asciiSum % 50;

  // Facteur 4: Différence de longueur
  score += Math.max(0, 10 - Math.abs(cleanName1.length - cleanName2.length)) * 2;

  // Facteur 5: Voyelles communes
  const vowelsName1 = cleanName1.split('').filter(char => VOWELS.includes(char));
  const vowelsName2 = cleanName2.split('').filter(char => VOWELS.includes(char));
  score += vowelsName1.filter(vowel => vowelsName2.includes(vowel)).length * 8;

  // Bonus
  if (cleanName1[0] === cleanName2[0]) score += 10;
  if (cleanName1.at(-1) === cleanName2.at(-1)) score += 10;

  // Normalisation entre 1 et 100
  score = Math.max(1, Math.min(100, (score % 95) + 5));

  // Messages et emojis
  const ranges = [
    { min: 90, msg: "💕 Match parfait ! Vous êtes faits l'un pour l'autre !", emoji: "💖" },
    { min: 80, msg: "🔥 Excellente compatibilité ! Une relation passionnée vous attend !", emoji: "🔥" },
    { min: 70, msg: "✨ Très bonne entente ! Vous formez un beau couple !", emoji: "✨" },
    { min: 60, msg: "💫 Bonne compatibilité ! Avec un peu d'efforts, ça peut être magnifique !", emoji: "💫" },
    { min: 50, msg: "🌟 Compatibilité correcte ! L'amour peut grandir avec le temps !", emoji: "🌟" },
    { min: 40, msg: "💝 Compatibilité moyenne ! Il faudra travailler sur la relation !", emoji: "💝" },
    { min: 30, msg: "🤔 Compatibilité faible... Mais l'amour fait parfois des miracles !", emoji: "🤔" },
    { min: 0,  msg: "😅 Compatibilité très faible... Peut-être restez amis ?", emoji: "😅" },
  ];

  const { msg, emoji } = ranges.find(r => score >= r.min);
  return { score, message: msg, emoji };
};

// Fonctions pour couleurs
const getScoreColor = score =>
  score >= 80 ? 'text-green-600' :
  score >= 60 ? 'text-yellow-600' :
  score >= 40 ? 'text-orange-600' : 'text-red-600';

const getScoreBackground = score =>
  score >= 80 ? 'bg-green-100' :
  score >= 60 ? 'bg-yellow-100' :
  score >= 40 ? 'bg-orange-100' : 'bg-red-100';

const App = () => {
  const [formData, setFormData] = useState({ name1: '', name2: '' });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name1.trim() || !formData.name2.trim()) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    setResult(calculateLoveCompatibility(formData.name1, formData.name2));
    setIsLoading(false);
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
            <Heart className="w-8 h-8 text-pink-500 mr-2" />
            <h1 className="text-4xl font-bold text-gray-800 mx-2">Love Match</h1>
            <Heart className="w-8 h-8 text-pink-500 ml-2" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <p className="text-gray-600 text-lg font-medium">Découvrez votre compatibilité amoureuse</p>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
        </div>

        {/* Carte principale */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            {/* Inputs */}
            {['name1', 'name2'].map((field, idx) => (
              <div key={field} className="relative">
                <label htmlFor={field} className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Users className="w-4 h-4 mr-2" />
                  {idx === 0 ? 'Premier prénom' : 'Deuxième prénom'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Entrez le ${idx === 0 ? 'premier' : 'deuxième'} prénom...`}
                    className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 text-gray-800 placeholder-gray-400"
                  />
                  <UserCheck className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${idx === 0 ? 'text-pink-400' : 'text-purple-400'}`} />
                </div>
              </div>
            ))}

            {/* Résultat */}
            {result && !isLoading && (
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200 text-center">
                <div className={`inline-block ${getScoreBackground(result.score)} rounded-full px-6 py-3 mb-4`}>
                  <span className={`text-3xl font-bold ${getScoreColor(result.score)}`}>{result.score}%</span>
                </div>
                <div className="text-4xl mb-3">{result.emoji}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{result.message}</p>
              </div>
            )}

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
                    <Heart className="w-5 h-5" />
                    <span>Tester la compatibilité !</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>

              {(formData.name1 || formData.name2 || result) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Recommencer</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <p className="text-gray-500 text-sm">Fait avec beaucoup d'amour et un peu de magie</p>
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
