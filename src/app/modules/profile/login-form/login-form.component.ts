import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(private authService: AuthService) {}


  ngOnInit() {

   this.authService.authState.subscribe((user) => {
      console.log(user);
        this.user = user;
        this.loggedIn = (user != null);
      });

  }


    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    // TODO - This function is not working
    signOut(): void {
        this.authService.signOut();
        // above line is not working to sign out from fb so sign out by clearing user object
        this.user = null;
    }

}
