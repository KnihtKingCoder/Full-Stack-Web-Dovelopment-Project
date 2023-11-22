let books=[
    {title:"The Great Gatsby",author:"F. Scott Fitzerald",year:1925},
    {title:"To kill a Mockingbird",author:"Harper lee",year:1960},
    {title:"Who are You?",author:"Georege Orwell",year:1949},
    {title:" Pride and Prejudice",author:"Jane Asten",year:1900}
    
]

function extractTitles(books,callback)
{
    bookTitle=books.map((book)=>{
        return book.title
    })

    callback(bookTitle)
}

function extractTitleslog(titles)
{
    titles.sort();
    console.log(titles.join(" , "));
}

extractTitles(books,extractTitleslog)