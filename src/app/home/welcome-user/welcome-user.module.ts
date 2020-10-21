import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WelcomeUserComponent } from './welcome-user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [WelcomeUserComponent],
  exports: [WelcomeUserComponent]
})
export class WelcomeUserComponentModule { }
