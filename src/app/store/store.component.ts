import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  books: Object; 
  loading: boolean = true;

  constructor(private BooksService: BooksService) {

  }

  loadBooksList(): void { 
    this.booksService.requestBooks().subscribe(data => {
      this.books = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loadBooksList();
  }
}
