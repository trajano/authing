import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    userName: string;
    password: string;
    loginFailed: boolean = false;

    constructor(private oauthService: OAuthService) {
    }

    login() {
        this.oauthService.clientId = "spa-demo";

        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

    loginWithPassword() {

        this.oauthService.clientId = "demo-resource-owner";

        this
            .oauthService
            .fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password)
            .then(() => {
                console.debug('successfully logged in');
                this.loginFailed = false;
            })
            .catch((err) => {
                console.error('error logging in', err);
                this.loginFailed = true;
            })
            .then(() => {
                this.oauthService.clientId = "angular-app-1";
            })
    }

    ngOnInit() { }

}