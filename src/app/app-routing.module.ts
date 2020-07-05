import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { BooksComponent } from './books/books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'books/:id', component: BooksComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddBooksComponent },
  { path: 'admin/edit/:id', component: EditBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
