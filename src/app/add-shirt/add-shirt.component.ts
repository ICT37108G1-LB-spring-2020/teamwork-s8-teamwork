import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-add-shirt',
  templateUrl: './add-shirt.component.html',
  styleUrls: ['./add-shirt.component.sass']
})
export class AddShirtComponent implements OnInit {
  addShirtForm:FormGroup; 

  constructor(formBuilder: FormBuilder, private shirtsService: ShirtsService) {
    this.addShirtForm = formBuilder.group({
      'model': [''],
      'type': [''],
      'price': [''],
      'imgUrl': ['']
    })
  }

  addShirt(){
    this.shirtsService.requestShirtAdding(this.addShirtForm.value).subscribe(() => {
      alert("Shirt has been successfully added!");
      this.addShirtForm.reset();
    });
  }

  onSubmit(): void {
    this.addShirt();
  }

  ngOnInit(): void {
  }
}
