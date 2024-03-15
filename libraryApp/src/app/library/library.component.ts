import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {CommonModule} from '@angular/common';
import {Book} from '../book.model';
import {BookDetailsComponent} from '../book-details/book-details.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookDetailsComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];
  book = <Book>{};

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.selectBook(this.books[0]);
    });
  }

  selectBook(selectedBook: Book) {
    this.book = selectedBook;
  }

  updateBook(selectedBook: Book) {
    this.bookService.updateBooks(selectedBook).subscribe();
  }
}
