import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShirtsService} from '../services/shirts.service';

@Component({
  selector: 'app-edit-shirt',
  templateUrl: './edit-shirt.component.html',
  styleUrls: ['./edit-shirt.component.sass']
})
export class EditShirtComponent implements OnInit {
  editShirtForm:FormGroup; 
  id: number;
  shirt;
  loading: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private shirtsService: ShirtsService) { 
    route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
  };

  editShirt(){
    this.shirtsService.requestShirtEdditing(this.id, this.editShirtForm.value).subscribe(() => {
      alert("Shirt has been successfully edited");
    });
  }

  onSubmit() {
    if(this.loading == true) {
      return;
    }
    this.editShirt();
  }

  loadShirt(): void {    
    this.shirtsService.requestShirtById(this.id).subscribe(
      (item:any) => {
        this.editShirtForm = this.formBuilder.group({
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
    this.loadShirt();
  }
}
