const compatibilite = (nom1, nom2) => {
  const newStr = (nom1 + 'aime' + nom2).toLowerCase();
  let numberLetter = {};
  for (let i = 0; i < newStr.length; i++) {
    numberLetter[newStr[i]] = (numberLetter[newStr[i]] || 0) + 1;
  }
  let instance = Object.values(numberLetter);
  let result = [];
  while (true) {
    if (result.length == 2) {
      break;
    }

    result = separate(suppressTwo(instance));

    instance = result;
  }
  return `Vous êtes compatible à ${result.join('')}%`;
};

function suppressTwo(array) {
  let newInstance = [];
  const size = Math.ceil(array.length / 2);
  if (array.length % 2 === 0) {
    for (let i = 0; i < size; i++) {
      newInstance[i] = array[i] + array[array.length - 1 - i];
    }
  } else {
    for (let i = 0; i < size - 1; i++) {
      newInstance[i] = array[i] + array[array.length - 1 - i];
    }
    newInstance[newInstance.length] = array[Math.floor(array.length / 2)];
  }
  return newInstance;
}

function separate(array) {
  let newArray = [];
  let string;
  for (let i = 0; i < array.length; i++) {
    string = `${array[i]}`;
    if (string.length > 1) {
      let stringArray = string.split('');
      for (let j = 0; j < stringArray.length; j++) {
        newArray.push(+stringArray[j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(separate([12, 5]));

console.log(compatibilite('Mayah', 'Colombe'));
