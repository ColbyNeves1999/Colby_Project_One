function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
    
    const arr3: Array<number> = [];

    let size: number = arr1.length;

    if(arr2.length > arr1.length)
    {
        size = arr2.length;
    }

    for (let i = 0; i < size; i += 1)
    {

        if( i < arr1.length ){
        arr3.push(arr1[i]);
        }

        if( i < arr2.length ){
        arr3.push(arr2[i]);
        }

    }

    return arr3;
}

const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

function checkWord(attempt: string, secret: string): string {

    let temp: string = '';

    for( let i = 0; i < 5; i += 1){
        if(secret.includes(attempt[i])){

            for( let j = 0; j < 5; j += 1){

                if(i === j && attempt[i] === secret[j]){
                    temp += 'c';
                }
                else if(!(i === j) && attempt[i] === secret[j])
                {
                    temp += 'p';
                }
                
            }

        }
        else{
            temp += 'a';
        }
    }

    return temp;

}

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}