import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShirtsService {
  constructor(private http: HttpClient) {

  }

  requestShirts() { 
    return this.http.get('http://localhost:3000/shirts');
  }

  requestShirtById(id) {
    return this.http.get(`http://localhost:3000/shirts/${id}`);
  }

  requestShirtDelete(id) {
    return this.http.delete(`http://localhost:3000/shirts/${id}`);
  }

  requestShirtAdding(shirt) {
    return this.http.post('http://localhost:3000/shirts', shirt);
  }

  requestShirtEdditing(id, editedShirt) {
    return this.http.put(`http://localhost:3000/shirts/${id}`, editedShirt);
  }
}