import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject, map, of} from 'rxjs';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    if (this.books.length === 0) {
      return <Observable<Book[]>>this.httpClient.get('../assets/library.json').pipe(
        map((books: any) => {
          this.books = books;
          return books;
        })
      );
    } else {
      return of(this.books);
    }
  }

  updateBooks(selectedBook: Book): Observable<Book[]> {
    let index = this.findBookIndexById(selectedBook);
    this.books[index] = selectedBook;
    return of(this.books);
  }

  getBook(id: string): Observable<Book> {
    if (this.books.length === 0) {
      return this.getBooks().pipe(map(val => this.findBookById(id)));
    } else {
      return of(this.findBookById(id));
    }
  }

  private findBookById(id: string): Book {
    const book = this.books.filter(book => book.id === id)[0];
    return book;
  }

  private findBookIndexById(selectedBook: Book) {
    return this.books.findIndex(book => book.id === selectedBook.id);
  }
}
