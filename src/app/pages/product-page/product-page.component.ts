import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ScrollService} from '../../../services/scroll.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../user/login/login.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ErgMenuComponent} from '../../components/erg-menu/erg-menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatStepper} from '@angular/material/stepper';
import {Section} from '../../services/section';
import {Subscription} from 'rxjs';
import {AutoScrollService} from '../../services/auto-scroll.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({height: 0, opacity: 0}),
            animate('.5s ease-out',
              style({height: 400, opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({height: 400, opacity: 1}),
            animate('.5s ease-in',
              style({height: 0, opacity: 0}))
          ]
        )
      ]
    ),
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('easeInOut', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('500ms ease-in', style({
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate('500ms ease-in', style({
          opacity: 0
        }))
      ])
    ])
  ]
})

export class ProductPageComponent implements OnInit {
  currentSection = 'section1';
  showMore = false;
  collapsed = false;
  mainImagesArray: any;
  text = 'A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.A multifaceted restaurant showcasing a live and interactive theater of dining experiences that evoke the senses. Live stations featuring Chinese, Japanese, Indian, Italian, Mediterranean, Sri Lankan, Turkish,Thai and Vietnamese specialties.';
  baseUrl = 'https://s3.amazonaws.com/sample-v1';
  images = ['architecture', 'boat', 'bonding', 'books', 'family'];
  selected;
  list: any[] = [];
  imageObject: Array<object> = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
      image: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80',
      alt: 'Image alt'
    },
    {
      video: '../assets/encoded.mp4',
      posterImage: '../assets/encoded_img.jpg',
      title: 'Local Video',
      alt: 'Image alt'
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
      posterImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      title: 'Image title'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      thumbImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      alt: 'Image alt'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Image title',
      alt: 'Image alt'
    }
  ];
  customSlider: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    margin: 0,
    stagePadding: 16,
    autoWidth: true,
    nav: false,
    navText: ['<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnPrev mat-icon notranslate material-icons mat-icon-no-color">navigate_before</div>', '<div mat-icon-button class="ow-navs ow-navs__button ow-navs__btnNext mat-icon notranslate material-icons mat-icon-no-color">navigate_next</div>'],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };
  sections: Array<Section>;
  selectedSection: Section;

  private subscription: Subscription = new Subscription();
  private noOfSections = 0;


  constructor(private scrollService: ScrollService, public dialog: MatDialog, private BottomSheetRef: MatBottomSheet, private autoScrollService: AutoScrollService ) {
  }


  scrollToId(id: string) {
    console.log('element id : ', id);
    this.scrollService.scrollToElementById(id);
  }

  scrollToElement(element: HTMLElement) {
    console.log(element.id);
    this.scrollService.scrollToElement(element);
  }

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    element.classList.remove('home-header');
    element.classList.add('sticky');
    this.list = this.images.map(name => `${this.baseUrl}/${name}.jpg`);
    this.mainImagesArray = <any> [
      {
        id: 'pl1',
        imgUrl: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2019/09/yimg_e9dsV5.jpg',
      },
      {
        id: 'pl2',
        imgUrl: 'https://www.primeresidencies.lk/?w=630&src=resources/212/slide1.jpg',
      },
      {
        id: 'pl3',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
      },
      {
        id: 'pl4',
        imgUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/134/134394306.jpg',
      },
    ];
    this.subscription.add(this.autoScrollService.sections.subscribe(sections => {
      if (sections) {
        this.sections = sections;
        this.noOfSections = sections.length;
      }
    }));
    this.subscription.add(this.autoScrollService.currentSection.subscribe(section => {
      if (section) {
        this.selectedSection = section;
      }
    }));
  }

  openMenu(): void {
    const dialogRef = this.dialog.open(ErgMenuComponent, {
      panelClass: ['modal--menu'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  reserve(): void {
    const dialogRef = this.dialog.open(ReserveModal, {
      panelClass: ['modal--medium', 'modal--stepper'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openReserveSheet(): void {
    this.BottomSheetRef.open(BottomSheetReserveSheet, {
      panelClass: ['bottom-sheet--default'],
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 650) {
      const element = document.getElementById('formFieldContainer');
      element.classList.add('formFieldContainer--sticky');
      const element2 = document.getElementById('reserve-btn');
      element2.classList.add('extended-fab--label-hide');
      this.collapsed = true;
    } else {
      const element = document.getElementById('formFieldContainer');
      element.classList.remove('formFieldContainer--sticky');
      this.collapsed = false;
      const element2 = document.getElementById('reserve-btn');
      element2.classList.remove('extended-fab--label-hide');
    }
  }

}

@Component({
  selector: 'reserve-modal',
  templateUrl: 'reserve-modal.html',
})
export class ReserveModal implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  smallScreen: boolean;
  signUp: boolean;
  signIn: boolean;
  guest: boolean;

  constructor(
    public dialogRef: MatDialogRef<ReserveModal>, private FormBuilder: FormBuilder, private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  userJourneyMange(user) {
    console.log(user);
    if (user === 'signUp') {
      this.signUp = true;
      this.signIn = false;
      this.guest = false;

    }
    if (user === 'signIn') {
      this.signUp = false;
      this.signIn = true;
      this.guest = false;
    }
    if (user === 'guest') {
      this.signUp = false;
      this.signIn = false;
      this.guest = true;
    }
  }

  ngOnInit() {
    this.firstFormGroup = this.FormBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.FormBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

@Component({
  selector: 'bottom-sheet-reserve-sheet',
  templateUrl: 'bottom-sheet-reserve-sheet.html',
})
export class BottomSheetReserveSheet {
  constructor(private BottomSheetRef: MatBottomSheetRef<BottomSheetReserveSheet>, public dialog: MatDialog) {
  }

  openLink(event: MouseEvent): void {
    this.BottomSheetRef.dismiss();
    event.preventDefault();
  }

  reserve(): void {
    const dialogRef = this.dialog.open(ReserveModal, {
      panelClass: ['modal--medium', 'modal--stepper'],
      data: {}
    });
    this.BottomSheetRef.dismiss();
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  closeSheet(): void {
    this.BottomSheetRef.dismiss();
  }
}

export class PlacesModel {
  imgUrl: any;
  description: any;
  title: any;
  url: any;
  id: any;
}
