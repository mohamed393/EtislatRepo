import {Injectable} from '@angular/core';

import {Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

interface Event {
  type: string;
  payload?: any;
}

type EventCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private handler = new Subject<Event>();
  private mode = new Subject<string>();
  private language = new Subject<string>();

  constructor() {
    this.mode.next(localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark');
  }

  public getInnerText(html) {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
  }

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: string, payload = {}) {
    this.handler.next({type, payload});
  }

  changeMode(mode: string) {
    this.mode.next(mode);
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.language.next(lang);
  }

  getLanguage() {
    return this.language.asObservable();
  }

  getMode() {
    return this.mode.asObservable();
  }

  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type: string, callback: EventCallback): Subscription {
    return this.handler.pipe(
      filter(event => event.type === type)).pipe(
      map(event => event.payload))
      .subscribe(callback);
  }
}
