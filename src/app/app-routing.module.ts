import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { ShirtComponent } from './shirt/shirt.component';
import { AddShirtComponent } from './add-shirt/add-shirt.component';
import { EditShirtComponent } from './edit-shirt/edit-shirt.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'shirt/:id', component: ShirtComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddShirtComponent },
  { path: 'admin/edit/:id', component: EditShirtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
