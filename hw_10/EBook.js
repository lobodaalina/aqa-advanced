/* В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
(все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo */

import Book from './Book.js';

class EBook extends Book {
	constructor(name, author, publishingYear, fileFormat) {
		super(name, author, publishingYear);
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (value !== 'ebup') {
			console.log('Wrong format');
		}
	}

	printInfo() {
		console.log(
			`The e-book "${this.name}" by ${this.author} was published in ${this.publishingYear} and is available in ${this.fileFormat} format`,
		);
	}

	static createEBook(book, fileFormat) {
		return new EBook(book._name, book._author, book._publishingYear, fileFormat);
	}
}

export default EBook;
