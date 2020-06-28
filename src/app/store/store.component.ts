import { Component, OnInit } from '@angular/core';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  shirts: Object; 
  loading: boolean = true;

  constructor(private shirtsService: ShirtsService) {

  }

  loadShirtsList(): void { 
    this.shirtsService.requestShirts().subscribe(data => {
      this.shirts = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loadShirtsList();
  }
}
