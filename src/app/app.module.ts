//region Imports
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginPage} from './login/login.page';
import {LocalStorage} from '../codes/localstorage';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BaseEntitiesService} from '../services/restinpeace/baseentities.service';

//endregion

export function tokenGetter() {
    return LocalStorage.getJwtToken();
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(
            {
                rippleEffect: true,
                mode: 'md'
            }
        ),
        AppRoutingModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                // whitelistedDomains: ['localhost:3001'],
                // blacklistedRoutes: ['localhost:3001/auth/']
            }
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BaseEntitiesService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
