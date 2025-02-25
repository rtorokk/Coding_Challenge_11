// Task 1: Creating a Book Class

class Book { // Class for creating a book object
    constructor(title, author, isbn, copies) { // Constructor for the book object
        this.title = title; // creating a title property for the book object
        this.author = author; // creating an author property for the book object
        this.isbn = isbn; // creating an isbn property for the book object
        this.copies = copies; // creating a copies property for the book object
    }
    getDetails() { // Method for getting the details of the book object
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // Adding method to return the details of the book object
    }
    updateCopies(quantity) { // Method for updating the copies of the book object
        this.copies += quantity; // Adding method to update the copies of the book object when borrowed or returned
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456", 5); // Creating a new book object
console.log(book1.getDetails()); // Expected Outcome: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5

book1.updateCopies(-1); // Updating the copies of the book object
console.log(book1.getDetails()); // Expected Outcome: Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4



