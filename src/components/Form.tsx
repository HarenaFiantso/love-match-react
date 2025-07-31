const Form = () => {
  return (
    <form className="bg-pink-100/30 h-screen flex justify-center items-center">
      <div className="border p-10 bg-white border-slate-200 w-[400px] flex flex-col items-center rounded-xl shadow-lg shadow-pink-400/40">
        <div className="text-5xl mb-5">❤️</div>
        <div className="text-3xl mb-3">Love Match</div>
        <div className="text-gray-500 mb-10">Découvrez votre compatibilité</div>
        <input
          className="border-slate-200 bg-slate-200/20 focus:outline-pink-200 border w-full py-3 rounded-md pl-5"
          type="text"
          placeholder="Premier prénom"
        />
        <div className="text-xl my-3">❤️</div>
        <input
          className="border-slate-200 bg-slate-200/20 focus:outline-pink-200 border w-full py-3 rounded-md pl-5 mb-10"
          type="text"
          placeholder="Deuxième prénom"
        />
        <button className="cursor-pointer text-white w-full rounded-md py-3 bg-gradient-to-br from-orange-400/90 via-pink-400/80 to-pink-500/90 hover:via-pink-400/90 transition-colors">
          Tester la comptabilité
        </button>
      </div>
    </form>
  );
};
export default Form;
