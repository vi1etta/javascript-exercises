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
    for (let title in array){
        return array[title] ; 
    }
  
}
console.log(getTheTitlesBook)
// Do not edit below this line
module.exports = getTheTitles;
