/* Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.*/

class Book {
    constructor (name, author, publishingYear) {
        this._name = name;
        this._author = author;
        this._publishingYear = publishingYear;
    }

    printInfo() {
        console.log(`The book "${this._name}" by ${this._author} was published in ${this._publishingYear}`);
    }

    get name() {
        return this._name
    }

    get author() {
        return this._author
    }

    get publishingYear() {
        return this._publishingYear
    }

    set name(value) {
        if (value.length < 3) {
            console.log(`Book's name too short`);
            return;
        }
        this._name = value;    
    }

    set author(value) {
        if (value.length < 3) {
            console.log(`Author's name too short`);
            return;
        }
        this._author = value;    
    }

    set publishingYear(value) {
        if (value < 1500) {
            console.log('Year is wrong');
            return;
        }
        this._publishingYear = value;  
    }

    static getOldestBook(booksArray) {
        let sortedArray = []
        for (let i = 0; i < booksArray.length; i++) {
            sortedArray = booksArray.sort((a, b) => a.publishingYear - b.publishingYear);
        }
        return sortedArray[0]
    }
}

export default Book;