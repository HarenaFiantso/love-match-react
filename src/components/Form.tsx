import heart from "../../public/heart.png"

export default function Form() {
    return (
        <center className="border flex flex-col justify-center items-center shadow-2xl shadow-pink-400 border-gray-500 w-fit px-15 rounded-4xl py-20">  
            <img src={heart} width={30} alt="heart logo" />
            <h1 className="text-3xl my-4">Love Match</h1>
            <p className="text-gray-500">Découvrez votre compatibilité</p>
            <form action="" className="flex flex-col justify-center items-center align-middle ">
                <input type="text" className="border mt-2.5 border-gray-500 w-fit text-center rounded-2xl px-3 py-2" placeholder="Premier Prénom" />
                <img src={heart} width={20} className="my-3.5"/>
                <input type="text" className="border mb-2.5 border-gray-500 w-fit text-center rounded-2xl px-3 py-2" placeholder="Deuxième Prénom" />
            </form>
            <button type="button" className="mt-6 bg-pink-300 px-9 py-4 rounded-4xl text-white cursor-pointer">Tester la compatibilité</button>

        </center>
    )
}