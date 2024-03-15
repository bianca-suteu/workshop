import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {BookService} from '../book.service';
import {Book} from '../book.model';
import {BookDetailsComponent} from '../book-details/book-details.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [CommonModule, BookDetailsComponent],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss'
})
export class BookPreviewComponent implements OnInit {
  book$ = new Observable<Book>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.book$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.bookService.getBook(params.get('id')!);
      })
    );
  }

  updateBook(selectedBook: Book) {
    this.bookService.updateBooks(selectedBook).subscribe();
  }
}
