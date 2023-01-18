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
