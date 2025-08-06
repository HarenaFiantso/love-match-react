

export default function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
     <div className="flex flex-col items-center justify-center gap-10 shadow-2xl w-120 h-150 rounded-2xl">
      <i className="fa-solid fa-heart text-pink-400 text-7xl"></i>
      <h1 className="text-2xl font-bold">
        LOVE MATCH
      </h1>
      <p>Decouvrez votre compatibilite</p>
      <div className="flex flex-col justify-center gap-5 items-center">
        <input className="border rounded-xl w-75 text-center h-8" type="text" placeholder="Entrez le premier prenom"/>
        <i className="fa-solid fa-heart text-red-400 animate-ping"></i>
        <input className="border rounded-xl w-75 text-center h-8" type="text" placeholder="Entrez la deuxieme prenom"/>
      </div>
      <button className="rounded-xl w-70 h-12 bg-pink-400 hover:bg-amber-100">
        <i className="fa-solid fa-play pr-7"></i>
        Testez votre compatibilite
        </button>
     </div>
    </main>
  );
}
