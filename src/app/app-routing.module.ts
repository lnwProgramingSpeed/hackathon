import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { BuyingPageComponent } from './buying-page/buying-page.component';
import { MyVideoPageComponent } from './my-video-page/my-video-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { WatchingPageComponent } from './watching-page/watching-page.component';
import { InboxPageComponent } from './inbox-page/inbox-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'buying',
    component: BuyingPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'myvideo',
    component: MyVideoPageComponent,
  },
  {
    path: 'qr',
    component: QrPageComponent,
  },
  {
    path: 'post',
    component: PostPageComponent,
  },
  {
    path: 'chat',
    component: ChatPageComponent,
  },
  {
    path: 'watching',
    component: WatchingPageComponent,
  },
  {
    path: 'inbox',
    component: InboxPageComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
