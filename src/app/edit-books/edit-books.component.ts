import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BooksService} from '../services/books.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.sass']
})
export class EditBooksComponent implements OnInit {
  editBooksForm:FormGroup; 
  id: number;
  books;
  loading: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private  booksService: BooksService) { 
    route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
  };

  editBooks(){
    this.booksService.requestBooksEdditing(this.id, this.editBooksForm.value).subscribe(() => {
      alert("Books has been successfully edited");
    });
  }

  onSubmit() {
    if(this.loading == true) {
      return;
    }
    this.editBooks();
  }

  loadBooks(): void {    
    this.booksService.requestBooksById(this.id).subscribe(
      (item:any) => {
        this.editBooksForm = this.formBuilder.group({
          'model': [`${item.model}`],
          'type': [`${item.type}`],
          'price': [`${item.price}`],
          'imgUrl': [`${item.imgUrl}`]
        })
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadBooks();
  }
}
