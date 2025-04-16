const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitlesBook = getTheTitles(books);

function getTheTitles(array) {
   return array.map((book)=>{return book.title})
}
console.log(getTheTitlesBook)
// Do not edit below this line
module.exports = getTheTitles;
