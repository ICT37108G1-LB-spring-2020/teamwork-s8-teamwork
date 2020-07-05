import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class booksComponent implements OnInit {
  id: number;
  books;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private bookssService: BookssService) { 
    route.params.subscribe(
      params => { 
        this.id = params['id']; 
      }
    ); 
  };

  loadBooks(): void {    
    this.booksService.requestBooksById(this.id).subscribe(
      (item) => {
        this.books = item;
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadBooks();
  }
}
