import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }
  private endpoint = "http://localhost:4730";

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }
  
   getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }
}
