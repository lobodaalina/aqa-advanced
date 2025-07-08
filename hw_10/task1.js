import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Way of Kings', 'Brandon Sanderson', 2010);
const book2 = new Book('Happy Place', 'Emily Henry', 2023);
const book3 = new Book('Educated', 'Tara Westover', 2018);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('The Ballad of Songbirds and Snakes', 'Suzanne Collins', 2020, 'epub');

ebook1.printInfo();

book1.author = 'nw';
ebook1.fileFormat = 'pdf';
ebook1.author = 'Alina';
ebook1.printInfo();

const booksArray = [book1, book2, book3, ebook1];

console.log(Book.getOldestBook(booksArray));

const ebook2 = EBook.createEBook(book2, 'epub');

console.log(ebook2);

const ebook3 = EBook.createEBook(book3, 'epub');

console.log(ebook3);
