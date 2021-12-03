import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  searchTerm : string = "";
  books : Book[];

  constructor(private bookApi: BookApiService) {
    this.books = this.bookApi.getAll();
   }

  ngOnInit(): void {
  }

  onSearch(input: Event){
    const inputEl = input.target as HTMLInputElement
    this.searchTerm = inputEl.value
    //console.log(this.searchTerm)
  }

  goToBookDetails(books: Book) {
    console.log('Navigate to book details, soon...');
    console.table(books);
  }

}
