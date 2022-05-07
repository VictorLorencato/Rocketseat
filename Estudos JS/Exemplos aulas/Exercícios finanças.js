let finanças = {
    receitas: [5, 10, 15],
    despesas: [3, 10, 15]
}

function sum(arraySum){
    let total = 0
    for(let value of arraySum){
        total+=value
    }
    return total
}

function balance (){
    const incomes = sum(finanças.receitas)
    const expenses = sum(finanças.despesas)
    const total = incomes - expenses
    let balance = 'negativo'
    if(total >= 0){
        balance = 'positivo'
    }
    console.log(`${balance}, valor: ${total}`)
}
balance()