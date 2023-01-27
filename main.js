let firstUserInput, secondUserInput;

while(isNaN(firstUserInput) || isNaN(secondUserInput)){
    firstUserInput=Number(prompt('Enter first operand:', ''));
    secondUserInput=Number(prompt('Enter second operand:', ''));
}

let userOperationInput;
let isInvalidOperation=true;
while(isInvalidOperation){
    userOperationInput=prompt('Enter operation for execution:', '');
    if(userOperationInput==='+' || userOperationInput==='-' || userOperationInput==='*' || userOperationInput==='/'){
        isInvalidOperation=false;
    }
}

let answer = executeOperation(firstUserInput,secondUserInput,userOperationInput);
console.log(answer);

function executeOperation(firstUserNumber, secondUserNumber, userOperation){
    if(userOperation==='+'){
        return firstUserNumber+secondUserNumber;
    } else if(userOperation==='-'){
        return firstUserNumber-secondUserNumber;
    } else if(userOperation==='*'){
        return firstUserNumber*secondUserNumber;
    } else if(userOperation==='/'){
        return firstUserNumber/secondUserNumber;
    } else{
        return 'invalid operation';
    }
}

