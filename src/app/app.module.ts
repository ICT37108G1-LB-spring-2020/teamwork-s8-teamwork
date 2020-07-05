import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { BooksService } from './services/books.service';
import { BooksComponent } from './books/books.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AdminComponent,
    BooksComponent,
    SpinnerComponent,
    AddBooksComponent,
    EditBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
