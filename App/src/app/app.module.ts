import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'angular5-social-login';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { LocationService } from './shared/location.service';
import { ListComponent } from './list/list.component';
import { SharedService } from './shared/shared.service';


// Configs
export function getAuthServiceConfigs() {
  // tslint:disable-next-line:no-shadowed-variable
  const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('412848419166912')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('176317878852-34mm2oo3jnu5ttom87cj4rfs2dv6rvjc.apps.googleusercontent.com')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('LinkedIn-client-Id')
  }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'list', component: ListComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    SocialLoginModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD21RQwv_rlb2Z7lnrbSzYlMgmiFW-YZqg'
    })
  ],
  providers: [
    LocationService,
    SharedService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
