import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {SearchWidgetComponent} from './components/search-widget/search-widget.component';
import {FiltersSheet, MoreFiltersModal, SearchPageComponent} from './pages/search-page/search-page.component';
import {HeaderComponent} from './components/header/header.component';
import {InputSpinnerComponent} from './components/input-spinner/input-spinner.component';
import {ProductsItemComponent} from './components/products-item/products-item.component';
import {PlaceTileComponent} from './components/place-tile/place-tile.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {MatChipsModule} from '@angular/material/chips';
import {BottomSheetReserveSheet, ProductPageComponent, ReserveModal} from './pages/product-page/product-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './pages/user/register/register.component';
import {ProfileComponent} from './pages/user/profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginComponent} from './pages/user/login/login.component';
import {RatingStarsComponent} from './components/rating-stars/rating-stars.component';
import {FormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {UserCommentsComponent} from './components/user-comments/user-comments.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {AutoSuggestComponent} from './components/auto-suggest/auto-suggest.component';
import {CheckoutComponent, FloatinBasketSheet} from './pages/checkout/checkout.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {EmptyLoaderComponent} from './components/empty-loader/empty-loader.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {ItemsSummaryComponent} from './components/items-summary/items-summary.component';
// import {InViewportModule} from '@thisissoon/angular-inviewport';
// import {ScrollSpyModule} from '@thisissoon/angular-scrollspy';
import {ErgMenuComponent} from './components/erg-menu/erg-menu.component';
import {MatRightSheetModule} from 'mat-right-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectSearchComponent} from './components/mat-select-search/mat-select-search.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import {Ng5SliderModule} from 'ng5-slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { ScrollSpyItemDirective } from './directives/scroll-spy-item.directive';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { ScrollSpyContentDirective } from './directives/scroll-spy-content.directive';
import { ScrollSpyComponent } from './components/scroll-spy/scroll-spy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchWidgetComponent,
    SearchPageComponent,
    HeaderComponent,
    InputSpinnerComponent,
    ProductsItemComponent,
    PlaceTileComponent,
    FooterComponent,
    SearchResultComponent,
    ProductPageComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    RatingStarsComponent,
    UserCommentsComponent,
    AutoSuggestComponent,
    CheckoutComponent,
    FiltersSheet,
    EmptyLoaderComponent,
    MoreFiltersModal,
    ReserveModal,
    ItemsSummaryComponent,
    ErgMenuComponent,
    FloatinBasketSheet,
    MatSelectSearchComponent,
    BottomSheetReserveSheet,
    ScrollSpyItemDirective,
    ScrollSpyDirective,
    ScrollSpyContentDirective,
    ScrollSpyComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatChipsModule,
    CarouselModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgImageSliderModule,
    GoogleMapsModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatStepperModule,
    MatRightSheetModule,
    MatSelectModule,
    MatBadgeModule,
    MatCardModule,
    NgbModule,
    MatRippleModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    Ng5SliderModule,
    NgxSkeletonLoaderModule,
    MatSidenavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
