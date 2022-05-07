let notaAluno = '0'

function nota(notaAluno){
    if(notaAluno >= 90 && notaAluno <= 100){
        console.log('A nota é A')
    }
    else if(notaAluno < 90 && notaAluno >= 80){
        console.log('A nota é B')
    }
    else if(notaAluno < 80 && notaAluno >= 70){
        console.log('A nota é C')
    }
    else if(notaAluno < 70 && notaAluno >= 60){
        console.log('A nota é D')
    }
    else if(notaAluno < 60 && notaAluno >= 0){
        console.log('A nota é F')
    }
    else{
        console.log('Nota inválida')
    }
    
}

nota(101)
nota(0)
nota(1)
nota(-1)
nota(48)
nota(64)
nota(71)
nota(80)
nota(91)
nota('f')
nota('ahsudhsdf')
nota()
nota(null)