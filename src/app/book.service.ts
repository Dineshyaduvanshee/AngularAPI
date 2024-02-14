import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  BookURL = "/api/books";
  constructor(private http: HttpClient) { }
  getBooksFromStor(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL);
  }
}
