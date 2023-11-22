

function filterCapitalization(books)
{
    let filterbook=books.filter(book=>book.year>2010)
    let updateBook=filterbook.map(books => {
        return{
            title:books.title,
            author: books.author.toUpperCase(),
            year: books.year
        };
    });

    return updateBook;
}


let books=[
    {Title:"book1",author:"author1",year:2002},
    {Title:"book2",author:"author2",year:2011},
    {Title:"book3",author:"author3",year:2022},
    {Title:"book4",author:"author4",year:2008},
    {Title:"book5",author:"author5",year:2019},
    {Title:"book6",author:"author6",year:2015}
]


console.log(filterCapitalization(books))