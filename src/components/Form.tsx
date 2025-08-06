export default function Form() {
  return (
    <form action="" className="bg-amber-100 flex flex-col justify-center rounded-2xl gap-4 text-center items-center p-10 px-20 shadow-2xl ">
      <img src="../public/heart.png" alt=""  className="w-20 h-20"/>
      <h2 className="text-2xl font-bold">Love match</h2>
      <p>Découvrez votre compatibilité</p>
      <div className="flex flex-col gap-4 justify-center items-center ">
        <input type="text" placeholder="enter a name" className="border-1 p-4 rounded-2xl"/>
         <img src="../public/heart.png" alt=""  className="w-5 h-5 "/>
        <input type="text" placeholder="enter a name" className="border-1 p-4 rounded-2xl"/>
        <button className="bg-blue-500 text-white p-3 rounded-2xl">Testez la compatibilité </button>
      </div>
    </form>
  );
}
