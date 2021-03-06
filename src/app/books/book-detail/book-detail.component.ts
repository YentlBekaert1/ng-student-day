import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookApi: BookApiService) {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.bookApi.getByIsbn(params?.isbn)) //switchmap zorgt ervoor dat je switcht van de ene observable naar de andere
    );
  }

  ngOnInit(): void {
  }

}
