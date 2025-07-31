export default function LoveForms() {
  return (
    <form action="" className="flex flex-col bg-white p-5 rounded-2xl shadow-2xl shadow-pink-200">
      <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <img src="/heart.png" alt="Heart image" width={80} />
        <h2 className="text-3xl">Love Match</h2>
        <p className="text-1xl text-gray-700">Découvrez votre compatibilité</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Premier prénom"
          className="bg-gray-100 p-4 rounded outline-pink-200"
        />
        <img src="/heart.png" alt="Heart image" width={32} />

        <input
          type="text"
          name="secondName"
          id="secondName"
          placeholder="Deuxième prénom"
          className="bg-gray-100 p-4 rounded outline-pink-200"
        />
        <button className="bg-pink-400 text-white rounded-md px-2 py-4">Tester la compatibilité</button>
      </div>
    </form>
  );
}
