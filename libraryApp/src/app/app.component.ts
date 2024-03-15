import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [BookService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'libraryApp';
}
