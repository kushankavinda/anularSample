import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './ProfileRoutingModule-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonModule } from 'primeng/button';

import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
// tslint:disable-next-line:prefer-const
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    // TODO GOOGLE ID IS NOT CORRECTED YET
    provider: new GoogleLoginProvider('iM8aY2k4TOmvTAmLzuWS3l2X', googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2290955884566654', fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SocialLoginModule,
    ProfileRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class ProfileModule { }
