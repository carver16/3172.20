const radius = 6;

function calcArea(num){
    //get pi from library
    const pi = Math.PI;

    //calculate area with radius
    const result = Math.pow(num,2) * pi;

    //print result to console
    console.log(result);
}

function arithmeticFuncs(num1, num2, s){
    
    
    if(s == 1){
        const result = num1 + num2;
    }
    else if(s == 2){
        const result = num1 - num2;
    }
    else if(s == 3){
        const result = num1 * num2;
    }
    else if(s == 4){
        const result = num1 / num2;
    }
    console.log(result);
}

arithmeticFuncs(10,2,1);
calcArea(radius);
