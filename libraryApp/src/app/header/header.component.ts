import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public bookCounter = 0;

  constructor(private bookService: BookService) {
    bookService
      .getBooksSubject()
      .subscribe(
        books =>
          (this.bookCounter = (books.filter(book => book.saved) || []).length)
      );
  }
}
