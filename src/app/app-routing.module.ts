import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { authGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'hijo',
        component: HomePageComponent
      },
    ],
    // can activate para tener que loguearse para acceder aca
    // y en las que tenga el authGuard
    canActivate: [ authGuard ]
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'random',
    component: RandomContactPageComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
