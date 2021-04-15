import {Component, NgZone, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {EventService} from './core/services/event.service';
import {CookiesService} from './core/services/cookies.service';
import {User} from './core/models/auth.models';

declare let ClientIP: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  GlobalIp;
  data;
  ice;
  iceArr;
  localIp = sessionStorage.getItem('LOCAL_IP');

  // private ipRegex = new RegExp(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/);


  constructor(
    public translate: TranslateService, private eventService: EventService,
    private cookiesService: CookiesService, private zone: NgZone,
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser')) as User;
    console.log('this.user', this.user);
    translate.addLangs(['en', 'ar']);
    const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
    translate.setDefaultLang(lang);
    this.eventService.changeLanguage(lang);
  }

  ngOnInit(): void {

  }
}
