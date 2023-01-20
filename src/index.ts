//import { run } from "node:test";

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
//testing
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

type Candidate = {
    name: string;
    vote: Array<number>;
    funding: number;
}

const edward: Candidate = {
    name: "Edward Underwood",
    vote: [192, 147, 186, 114, 267],
    funding: 58182890
}

const rose: Candidate = {
    name: "Rose Olson",
    vote: [48, 90, 12, 21, 13],
    funding: 78889263
}

const leonard: Candidate = {
    name: "Leonard Willis",
    vote: [206, 312, 121, 408, 382],
    funding: 36070689
}

const nathaniel: Candidate = {
    name: "Nathaniel Taylor",
    vote: [37, 21, 38, 39, 29],
    funding: 6317921937
}

const canArray: Array<Candidate> = [edward, rose, leonard, nathaniel];

let indivSum: Array<number> = [0,0,0,0]; //Individual vote count totals
let totalVote: number = 0; //total sum of votes
let distSum: Array<number> = [0,0,0,0,0]; //individual district total votes

//determines district total votes
for( let i = 0; i < 4; i += 1){
    for(let j = 0; j < 5; j += 1){
        distSum[j] += canArray[i].vote[j];
    }
}

//determines total votes across all districts
for( let i = 0; i < 4; i += 1){
    for(let j = 0; j < 5; j += 1){
        totalVote += canArray[i].vote[j];
    }
}

//determines total votes for each candidate
for( let i = 0; i < 4; i += 1){
    for(let j = 0; j < 5; j += 1){
        indivSum[i] += canArray[i].vote[j];
    }
    let percent: number = (indivSum[i] / totalVote) * 100;
    console.log(canArray[i].name, " -- ", indivSum[i], " votes -- ", percent, "%");
}

//compares individual votes against sum of the district
for( let i = 0; i < 4; i += 1){
    console.log(canArray[i].name);
    for(let j = 0; j < 5; j += 1){
        let percent: number = (canArray[i].vote[j] / distSum[j]) * 100;
        console.log("Precinct ", j+1, " -- ", percent, "%");
    }
}

//calculates money spent per vote
for( let i = 0; i < 4; i += 1){
    console.log(canArray[i].name, " spent $", (canArray[i].funding / indivSum[i]), "per vote.");
}

//Determines final vote percentages
const votePercent: Array<number> = [];
for(let i = 0; i < 4; i += 1){

    votePercent[i] = ((indivSum[i]/totalVote)*100);

}

for(let i = 0; i < 4; i += 1){
    for(let j = 0; i < 4; i += 1){
        if(votePercent[j] > votePercent[i])
        {
            let temp1: number = votePercent[j];
            votePercent[j] = votePercent[i];
            votePercent[i] = temp1;
        }
    }
}

let winner: string = "";
for(let i = 0; i < 4; i += 1){

    if(votePercent[i] > 50){
        winner = canArray[i].name;
        i = 4;
    }

}

if(winner === ""){
    console.log("It is a runnoff betweeen", canArray[0].name, "and", canArray[1].name, ".");
}
else{
    console.log("The winner is", winner);
}