import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { BookDetailComponent} from './books/book-detail/book-detail.component';

const routes: Routes = [
   {
    path: '',
    pathMatch: 'full',
    redirectTo: '/book'
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
