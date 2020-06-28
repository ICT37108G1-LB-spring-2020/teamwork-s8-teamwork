import { Component, OnInit } from '@angular/core';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  shirts: Object; 
  loading: boolean;

  constructor(private shirtsService: ShirtsService) {

  }

  loadShirtsList(): void { 
    this.loading = true; 
    
    this.shirtsService.requestShirts().subscribe(data => {
      this.shirts = data;
      this.loading = false; 
    });
  }

  deleteShirt(id): void {
    this.shirtsService.requestShirtDelete(id).subscribe(() => {
      this.loadShirtsList();
    });
  }

  ngOnInit(): void {
    this.loadShirtsList();
  }
}
