import {AfterViewInit, Component, OnInit} from '@angular/core';

import {EventService} from '../core/services/event.service';

import {LAYOUT_HORIZONTAL, LAYOUT_VERTICAL} from './layouts.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  mode: string;
  dir: string;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
    this.eventService.getLanguage().subscribe(dir => {
      this.dir = dir;
    });
    this.eventService.getMode().subscribe(mode => {
      this.mode = mode;
      console.log('mode', mode);
    });
    this.eventService.changeMode(localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark');
    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout) => {
      this.layoutType = layout;
    });
  }

  ngAfterViewInit() {
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }
}
