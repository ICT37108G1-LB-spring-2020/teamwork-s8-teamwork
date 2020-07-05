import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
 books: Object; 
  loading: boolean;

  constructor(private booksService: BooksService) {

  }

  loadSBooksList(): void { 
    this.loading = true; 
    
    this.booksService.requestBooks().subscribe(data => {
      this.books = data;
      this.loading = false; 
    });
  }

  deleteBooks(id): void {
    this.booksService.requestBooksDelete(id).subscribe(() => {
      this.loadBooksList();
    });
  }

  ngOnInit(): void {
    this.loadBooksList();
  }
}
