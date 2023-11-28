var books=[
    {
        author:"rs agrawal",
        publication:2012,
    },
    {
        author:"s.chand",
        publication:2002,
    },
    {
        author:"dk panday",
        publication:2006,
    },
    {
        author:"ziaurrehman",
        publication:2023,
    },
]
const ans=books.filter((book)=>{
    return book.publication<2010;

});
const result=ans.map((book)=>{
    return{
        ...book,
        author:book.author.toUpperCase(),
    };


});
console.log(result)