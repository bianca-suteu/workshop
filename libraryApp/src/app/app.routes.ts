import {Routes} from '@angular/router';
import {LibraryComponent} from './library/library.component';
import {BookPreviewComponent} from './book-preview/book-preview.component';
import {WishlistComponent} from './wishlist/wishlist.component';

export const routes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'book-preview/:id', component: BookPreviewComponent}
];
