import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule,} from '@angular/common/http';

import {NgbAccordionModule, NgbNavModule, NgbTooltipModule,} from '@ng-bootstrap/ng-bootstrap';

import {LayoutsModule} from './layouts/layouts.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {EtrainingProgressBarModule} from './shared/ui/progress-bar/progress-bar.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SocketIoModule} from 'ngx-socket-io';
import {QuillModule} from 'ngx-quill';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ClipboardModule} from 'ngx-clipboard';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';


export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const config = {
    apiKey: "AIzaSyDrykyc9Nvf48xXviRi9uN31GQkPnMt_gs",
    databaseURL: "https://medo74-5b94b.firebaseio.com",
    projectId: "medo74-5b94b"
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutsModule,
        AppRoutingModule,
        NgbAccordionModule,
        NgbNavModule,
        NgbTooltipModule,
        EtrainingProgressBarModule,
        AngularFireModule,
        AngularFireAuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient],
            },
        }),
        QuillModule.forRoot(),
        SocketIoModule,
        ClipboardModule,
        AngularSvgIconModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        // {provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true},
    ],
})
export class AppModule {
}
