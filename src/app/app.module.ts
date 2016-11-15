import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { NFCPage } from '../pages/nfc/nfc';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';

import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule, AuthMethods } from 'angularfire2';

import { AuthService } from '../shared/services/auth.service'

const firebaseConfig = {
  apiKey: 'AIzaSyDrRnguFUwKGBzaTOcBcj-bC0vBxx6sDao',
  authDomain: 'me-card.firebaseapp.com',
  databaseURL: 'https://me-card.firebaseio.com',
  storageBucket: 'me-card.appspot.com',
  messagingSenderId: "158994092281"
};

const myFirebaseAuthConfig = {
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    NFCPage,
    AccountPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig ),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    NFCPage,
    AccountPage,
    AboutPage,
    TabsPage
  ],
  providers: [AuthService]
})

export class AppModule {}
