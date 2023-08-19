const checkVoterEligibility =(age:number): string =>{
    if(age>=18){
        return"Eligible to vote";
    }else {
        return"Not Eligible to vote";
    }
};
///example
const age = 35;
const result = checkVoterEligibility(age);
console.log(`A person with age ${age} is ${result}`);
