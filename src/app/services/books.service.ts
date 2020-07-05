import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {

  }

  requestBooks() { 
    return this.http.get('http://localhost:3000/Books');
  }

  requestBooksById(id) {
    return this.http.get(`http://localhost:3000/books/${id}`);
  }

  requestBooksDelete(id) {
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }

  requestBooksAdding(books) {
    return this.http.post('http://localhost:3000/books', books);
  }

  requestBooksEdditing(id, editedBooks) {
    return this.http.put(`http://localhost:3000/books/${id}`, editedBooks);
  }
}