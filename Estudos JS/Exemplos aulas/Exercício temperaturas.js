let temp = '20F'
function temperature(temp){
    temp = temp.toUpperCase()
    if(temp.includes('C')==true && temp.includes('F')==false){
        tempC = parseInt(temp)
        if(isNaN(tempC)){
            console.log('Vai toma no cu')
            return 1
        }
        tempF = tempC*9/5+32
        console.log(`temperatura Celsius: ${tempC.toFixed(2)} C`)
        console.log(`temperatura em Fahrenheit: ${tempF.toFixed(2)} F`)
    }
    else if(temp.includes('F')==true && temp.includes('C')==false){
        tempF = parseInt(temp)
        if(isNaN(tempF)){
            console.log('Vai toma no cu')
            return 1
        }
        tempC = (tempF-32)*5/9
        console.log(`temperatura em Celsius: ${tempC.toFixed(2)} C`)
        console.log(`temperatura em Fahrenheit: ${tempF.toFixed(2)} F`)
    }
    else{
        console.log('Vai toma no cu')
    }
}

temperature(temp)
temperature('75 c')
temperature('200 f')
temperature('enfuwef')
temperature('29CF')
temperature('30')
temperature('-49C')
temperature('cuF')
temperature('bucetaC')
temperature('null')
