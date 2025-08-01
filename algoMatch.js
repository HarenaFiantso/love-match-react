import promptSync from 'prompt-sync';
const prompt = promptSync();

function isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122 || code === 32);
}

function getValidName(label) {
    let input = "";

    while (true) {
        input = prompt(`${label}: `).trim();

        if (input.length === 0) {
            console.log("You have to complete this field");
            continue;
        }

        let allLetters = true;
        for (let i = 0; i < input.length; i++) {
            if (!isLetter(input[i])) {
                allLetters = false;
                break;
            }
        }

        if (!allLetters) {
            console.log("Please enter a valid name");
        } else {
            break;
        }
    }

    return input.toLowerCase();
}


const name1 = getValidName("Name 1");
const name2 = getValidName("Name 2");

const joinName = name1 + name2;

let counted = [];
let counts = [];

for (let i = 0; i < joinName.length; i++) {
    let char = joinName[i];
    if (!counted.includes(char)) {
        let occur = 0;
        for (let j = 0; j < joinName.length; j++) {
            if (joinName[j] === char) {
                occur++;
            }
        }
        counted.push(char);
        counts.push(occur);
    }
}

console.log("Tableau initial :", counts);

function fullyReduce(arr) {
    while (arr.length > 2 || arr.some(n => n > 9)) {
        let newArr = [];
        let i = 0, j = arr.length - 1;

        while (i < j) {
            let sum = arr[i] + arr[j];
            let digits = sum.toString().split("").map(Number);
            newArr.push(...digits);
            i++;
            j--;
        }

        if (i === j) {
            let digits = arr[i].toString().split("").map(Number);
            newArr.push(...digits);
        }

        arr = newArr;
    }

    return arr.join("");
}


const result = fullyReduce(counts);
console.log(`${result}%`);


/**
 * -on join chaque nom pour pouvoir compter les caractere
 * -boucle sur la chaine de caractere de noms
 * -compter chaque caractère sans prendre en compte de la casse
 * -on prend le premier caractere d'abord et on le stock qqpart pour faire en sorte que ce caractere est deja du nombre de 1 
 * -on fait une autre boucle pour voir si dans les deux noms il y a d'autre caractères egal au premier caractère et on compte si oui
 * -quand c'est fini on passe au caractere suivant et on fait la meme chose
 * 
 * - on devra maintenant avoir un tableau de int qui sont les nmobre des nombre de chaque caractere qu'on a compté
 * - on additionne maintenant le tout premier nombre du tableau au tout dernier nombre et on stock cette valeur dans un autre tableau de int 
 * - puis on passe au prochain nombre du tableau qu'on aditionnera à l'avant dernier nombre du tableau qu'on va stocker dans le nouveau tableau d'int avec la valeur de l'addition des deux premiers nombres tout à l'heure
 * - on fait de meme pour le reste des element du tableau pour avoir un tout nouveau tableau avec lequel on va faire la meme procedure de reduction
 * - à noter que chaque nombre obtenu apres l'addition et que l'on donnera dans un nouveau tableau sera obligé d'etre séparé si jamais genre dans l'ancien tableau on a fait 6+5 donc la réponse c'est 11, ce 11 doit etre changé en [1,1] dans le nouveau tableau ou il y a le resultat d'addition, ou si un caractère est + de 9 on fera en sorte que directement ce soit separé genre il y a 10 'b' par exemple donc dans le tableau ce sera [1, 0]
 * - le reste suivra cette logique jusquà ce que la longeur du tableau soit de 2 et soit seulement composé de chiffre dont de 0 à 9 seulement sinon on continuera comme dis precedement
 * - si un tableau est impair on rajoute directe celui qui n'aura pas de couple avec qui s'additionner à la fin du nouveau tableau
 */