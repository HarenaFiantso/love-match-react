export function isLetter(char: string): boolean {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 32;
}

export function isValidName(name: string): boolean {
  if (!name.trim()) return false;
  for (let i = 0; i < name.length; i++) {
    if (!isLetter(name[i])) return false;
  }
  return true;
}

export function calculateLoveMatch(name1: string, name2: string): string {
  const joinName = (name1 + name2).toLowerCase().replace(/ /g, '');

  const counted: string[] = [];
  const counts: number[] = [];

  for (let i = 0; i < joinName.length; i++) {
    const char = joinName[i];
    if (!counted.includes(char)) {
      let occur = 0;
      for (let j = 0; j < joinName.length; j++) {
        if (joinName[j] === char) occur++;
      }
      counted.push(char);
      counts.push(occur);
    }
  }

  return fullyReduce(counts);
}

function fullyReduce(arr: number[]): string {
  while (arr.length > 2 || arr.some((n) => n > 9)) {
    const newArr: number[] = [];
    let i = 0,
      j = arr.length - 1;

    while (i < j) {
      const sum = arr[i] + arr[j];
      newArr.push(...sum.toString().split('').map(Number));
      i++;
      j--;
    }

    if (i === j) {
      newArr.push(...arr[i].toString().split('').map(Number));
    }

    arr = newArr;
  }

  return arr.join('');
}
