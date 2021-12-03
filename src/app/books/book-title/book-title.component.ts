import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-title',
  templateUrl: './book-title.component.html',
  styleUrls: ['./book-title.component.scss']
})
export class BookTitleComponent implements OnInit {

  @Input() content!: Book;
  @Output() detailClicked = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  titleColor = 'grey';

  customStyle = {
    color: 'grey'
  };

  handleDetailClick(click: MouseEvent) {
    click.preventDefault();
     // Emit an event
    this.detailClicked.emit(this.content);
  }

}
