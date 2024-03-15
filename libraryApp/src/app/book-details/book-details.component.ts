import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../book.model';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  @Input() book = <Book>{};
  @Input() showDetails = true;
  @Output() updateBook = new EventEmitter<Book>();

  public toggleSaveStatus() {
    this.book.saved = !this.book.saved;
    this.updateBook.emit(this.book);
  }
}
