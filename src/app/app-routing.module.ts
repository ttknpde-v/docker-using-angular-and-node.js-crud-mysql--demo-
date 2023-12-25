import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";

const routes: Routes = [
  {path:'table',component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
