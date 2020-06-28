import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { ShirtsService } from './services/shirts.service';
import { ShirtComponent } from './shirt/shirt.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddShirtComponent } from './add-shirt/add-shirt.component';
import { EditShirtComponent } from './edit-shirt/edit-shirt.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AdminComponent,
    ShirtComponent,
    SpinnerComponent,
    AddShirtComponent,
    EditShirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShirtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
