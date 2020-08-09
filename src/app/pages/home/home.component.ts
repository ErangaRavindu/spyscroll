import {Component, OnInit, AfterViewInit, HostListener} from '@angular/core';
import { SearchWidgetComponent } from '../../components/search-widget/search-widget.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  PromotionsArray: any;
  RecomendationsArray: any;
  PlacesArray: any;
  apiData: PhotosApi;
  limit: number = 10;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    margin: 0,
    stagePadding: 16,
    autoWidth: false,
    nav: false,
    navText:  ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  };
  placesSlider: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    nav: false,
    stagePadding: 16,
    autoWidth: false,
    navText:  ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    }
  };

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    element.classList.remove('sticky');
    element.classList.add('home-header');
    this.fetch();
    this.PromotionsArray = <any> [
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '7,750',
        id: '1',
        url: '/product',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '37,912',
        id: '2',
        url: '/product',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-samui-hotels/pagePropertiesImage/best-hotels-samui.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,750',
        id: '3',
        url: '/product',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/hotels/pagePropertiesImage/sri-lanka-hotels.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,751',
        id: '4',
        url: '/product',
        type: 'product-tile-content--horiz',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
    ];
    this.RecomendationsArray = <any> [
      {
        imgUrl: 'http://lh3.googleusercontent.com/proxy/YonSOLwnKOfOVw3gxvaYDvubvRri6QK2MoBSL_gPY-zBLwFVXByqPc6XcULdlgw1kn3FR1ybf0p2Z3ZWHs2GY3hhCJng6Jdwo-SV8DoGuOi8VXrlXv-F3S39syPyIlwiQqzcBmdxTd6C0Uy6LBdREjYx7cSJlT4=w240-h200-n-k-no',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '7,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '37,912',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'data:image/jpeg;base64,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',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://lh3.googleusercontent.com/p/AF1QipO_j0eqaOG89I_rCDZL2OIfA2v_Y4tbd9fV6kQz=w296-h202-n-k-rw-no-v1',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '5,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'http://lh3.googleusercontent.com/proxy/YonSOLwnKOfOVw3gxvaYDvubvRri6QK2MoBSL_gPY-zBLwFVXByqPc6XcULdlgw1kn3FR1ybf0p2Z3ZWHs2GY3hhCJng6Jdwo-SV8DoGuOi8VXrlXv-F3S39syPyIlwiQqzcBmdxTd6C0Uy6LBdREjYx7cSJlT4=w240-h200-n-k-no',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '7,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://image.shutterstock.com/image-illustration/front-view-cafe-shop-restaurant-260nw-1304948197.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '37,912',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/a9/fa/f0/front-of-our-restaurant.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '2,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      },
      {
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/af/fe/ab/front-view-of-restaurant.jpg',
        logo: 'https://www.seekpng.com/png/full/141-1411277_marriott-logo-transparent-download-marriott-hotels-india-pvt.png',
        Name: 'Happy hour at cafe Noir',
        Price: '5,750',
        url: '/product',
        type: 'product-tile-content--vert',
        description: 'Happy hour at cafe Noir',
        description2: 'Happy hour at cafe Noir',
      }
    ];
    this.PlacesArray = <any> [
      {
        id: 'pl1',
        imgUrl: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2019/09/yimg_e9dsV5.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Tea Avenue',
      },
      {
        id: 'pl2',
        imgUrl: 'https://www.primeresidencies.lk/?w=630&src=resources/212/slide1.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Barnes Place',
      },
      {
        id: 'pl3',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Kingsbury',
      },
      {
        id: 'pl4',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
        description: 'Tea Avenue will provide you the select best teas from Sri Lanka (previously known as Ceylon), and from all over the world, to provide you a tea experience like no other. The teas will be Brewed to Perfection by our staff, and served to exceed your expectations. ',
        title: 'Kingsbury',
      },
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 150) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.remove('home-header');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.add('home-header');
    }
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = res,
      err => throwError(err)
    );
  }
}



export class ProductModel {
  imgUrl: any;
  logo: any;
  Name: any;
  Price: any;
  description: any;
  type: any;
  id: any;
  url: any;
}
export class PlacesModel {
  imgUrl: any;
  description: any;
  title: any;
  url: any;
  id: any;
}
