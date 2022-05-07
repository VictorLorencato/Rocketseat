const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

function index () {
    let categories = 0
    let booksInCategory = []
    for(i=0;i<booksByCategory.length;i++){
        let objects = booksByCategory[i]
        if('category' in objects){
            categories++
            booksInCategory[i] = 0
            for(j=0;j<objects.books.length;j++){
                booksInCategory[i]++
            }
        }
    }
console.log(`The array has ${categories} categories`)
for(i=0;i<booksByCategory.length;i++){
    console.log(`There are ${booksInCategory[i]} books in the ${booksByCategory[i].category} category`)
}
}

function authorsCount () {
    let authorsAll = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authorsAll.indexOf(book.author) == -1){
                authorsAll.push(book.author)
            }
        }  
    }
    console.log(`Total de autores: ${authorsAll.length}`)
}

function augustoCury (){
    let augustoBooks = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == 'Augusto Cury'){
                augustoBooks.push(book.title)
            }
        }
    }
    console.log(`Os livros de Augusto Cury são: ${augustoBooks.join(", ")}`)
}

function authorSearch (){
    let currentAuthor = 'T. Harv Eker'
    let authorBooks = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(currentAuthor == book.author){
                authorBooks.push(book.title)
            }
        }
    }
    console.log(`Os livros de ${currentAuthor} são: ${authorBooks.join(", ")}`)
}

augustoCury ()