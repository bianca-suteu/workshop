import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject, map, of} from 'rxjs';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  private booksSource = new Subject<Book[]>();

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    if (this.books.length === 0) {
      return <Observable<Book[]>>(
        this.httpClient.get('../assets/library.json').pipe(
          map((books: any) => {
            this.booksSource.next(books);
            this.books = books;
            return books;
          })
        )
      );
    } else {
      return of(this.books);
    }
  }

  getBooksSubject(): Observable<Book[]> {
    return this.booksSource.asObservable();
  }

  updateBooks(selectedBook: Book): Observable<Book[]> {
    let index = this.findBookByIndex(selectedBook);
    this.books[index] = selectedBook;
    this.booksSource.next(this.books);
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

  private findBookByIndex(selectedBook: Book) {
    return this.books.findIndex(book => book.id === selectedBook.id);
  }
}
