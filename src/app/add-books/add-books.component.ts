import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.sass']
})
export class AddBooksComponent implements OnInit {
  addBooksForm:FormGroup; 

  constructor(formBuilder: FormBuilder, private booksService: BooksService) {
    this.addBooksForm = formBuilder.group({
      'model': [''],
      'type': [''],
      'price': [''],
      'imgUrl': ['']
    })
  }

  addBooks(){
    this.booksService.requestBooksAdding(this.addBooksForm.value).subscribe(() => {
      alert("Books has been successfully added!");
      this.addBooksForm.reset();
    });
  }

  onSubmit(): void {
    this.addBooks();
  }

  ngOnInit(): void {
  }
}
