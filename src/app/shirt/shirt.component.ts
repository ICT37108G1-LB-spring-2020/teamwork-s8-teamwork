import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.sass']
})
export class ShirtComponent implements OnInit {
  id: number;
  shirt;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private shirtsService: ShirtsService) { 
    route.params.subscribe(
      params => { 
        this.id = params['id']; 
      }
    ); 
  };

  loadShirt(): void {    
    this.shirtsService.requestShirtById(this.id).subscribe(
      (item) => {
        this.shirt = item;
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadShirt();
  }
}
