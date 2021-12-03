import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book.component';

import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookTitleComponent } from './book-title/book-title.component';

@NgModule({
  declarations: [
    BookComponent,
    BookFilterPipe,
    BookTitleComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],exports:[
    BookComponent
  ]
})
export class BooksModule { }


