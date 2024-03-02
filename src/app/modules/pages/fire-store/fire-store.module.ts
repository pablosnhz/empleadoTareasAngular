import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireStoreRoutingModule } from './fire-store-routing.module';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';


@NgModule({
  declarations: [
    ShoppingPageComponent
  ],
  imports: [
    CommonModule,
    FireStoreRoutingModule
  ]
})
export class FireStoreModule { }
