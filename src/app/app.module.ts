import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms';

=======
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BuyingPageComponent } from './buying-page/buying-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyVideoPageComponent } from './my-video-page/my-video-page.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { WatchingPageComponent } from './watching-page/watching-page.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BuyingPageComponent,
    LoginPageComponent,
    MyVideoPageComponent,
    QrPageComponent,
    SearchPageComponent,
    PostPageComponent,
    ChatPageComponent,
    WatchingPageComponent,
    InboxPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
