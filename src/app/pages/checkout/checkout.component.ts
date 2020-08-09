import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MatRightSheet, MatRightSheetRef} from 'mat-right-sheet';

import {shakeItOff} from '../../components/animations/shake.animation';
import {AnimationBuilder, AnimationPlayer, group, query, style, animate, keyframes} from '@angular/animations';
import {
  trigger
} from '@angular/animations';

;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],

})
export class CheckoutComponent implements OnInit {
  private player: AnimationPlayer;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  constructor(private RightSheet: MatRightSheet, private builder: AnimationBuilder) {
  }

  zoom = 12;
  public basketRef;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
    element.classList.remove('home-header');
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('cart-button');
      element.classList.add('extended-fab--label-hide');
    } else {
      const element = document.getElementById('cart-button');
      element.classList.remove('extended-fab--label-hide');
    }
  }
  addToBasket(): void {
    const animationElement = document.getElementById('cart-button');
    animationElement.classList.add('shakeit');
    setTimeout(function(){
      animationElement.classList.remove('shakeit');
    }, 300);
  }


  openBasket(): void {
    this.basketRef = this.RightSheet.open(FloatinBasketSheet, {
      panelClass: 'floatingBasket',
      hasBackdrop: false,
    });
  }


}

@Component({
  selector: 'floating-basket-sheet',
  templateUrl: 'floating-basket-sheet.html',
})
export class FloatinBasketSheet {
  constructor(private RightSheetRef: MatRightSheetRef<FloatinBasketSheet>) {
  }

  openLink(event: MouseEvent): void {
    this.RightSheetRef.dismiss();
    event.preventDefault();
  }

  closeBasket(): void {
    this.RightSheetRef.dismiss();
  }
}
