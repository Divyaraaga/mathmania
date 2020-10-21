import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomeUserComponentModule } from '../welcome-user/welcome-user.module';

import { HomeScreenPageRoutingModule } from './home-screen-routing.module';
import { HomeScreenPage } from './home-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeUserComponentModule,
    HomeScreenPageRoutingModule
  ],
  declarations: [HomeScreenPage]
})
export class HomeScreenPageModule {}
