import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
// import { AuthenticationService } from '../../core/services/authf.service';
import {AuthenticationService} from '../../core/services/auth.service';
import {EventService} from '../../core/services/event.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {User} from 'src/app/core/models/auth.models';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {
  element;
  configData;
  openMobileMenu: boolean;
  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();
  user: User;
  public lang;
  host;
  language;
  paragraphUnderLogo = true;
  accountLogo;
  accountName;
  accountUser;
  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthenticationService,
    private eventService: EventService,
    private translateService: TranslateService,
  ) {
    document.body.classList.add('mode');
    this.host = environment.HOST + 'uploads/uploads/';
    this.eventService.getLanguage().subscribe((response) => {
      this.translate.use(this.lang);
      document.body.setAttribute('dir', response === 'en' ? 'ltr' : 'rtl');
    });
    this.lang = localStorage.getItem('lang');
    if (!this.lang) {
      this.lang = 'en';
    }
    this.eventService.changeLanguage(this.lang);
  }

  ngOnInit() {
    this.language = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang;
    });
    this.user = this.authService.currentUserValue;
    this.accountUser = this.user.AccountAdmin ? 'AccountAdmin' : this.user.Instructor ? 'Instructor' : this.user.Student ? 'Student' : undefined;

    if (this.accountUser) {
      this.accountLogo = this.user[this.accountUser].Account.logo;
      this.accountName = this.user[this.accountUser].Account.accountName;
      console.log('this.accountName', this.accountName);
    }

    //if (!this.user.Instructor || !this.user.AccountAdmin || !this.Us) {
    // this.logout();
    //}
    this.openMobileMenu = false;
    this.element = document.documentElement;
    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3,
    };
  }

  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  changeLanguage(lang: string) {
    this.eventService.changeLanguage(lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.language = lang;
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    console.log('event', event);
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
    this.paragraphUnderLogo = !this.paragraphUnderLogo;
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();

  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
}
