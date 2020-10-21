import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlayGameComponent } from './play-game.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCircleProgressModule.forRoot({
		      "backgroundColor": "#917850",
			  "radius": 60,
			  "maxPercent": 200,
			  "unitsColor": "#FFFFFF",
			  "outerStrokeWidth": 5,
			  "outerStrokeColor": "#FFFFFF",
			  "innerStrokeColor": "#FFFFFF",
			  "titleColor": "#FFFFFF",
			  "subtitleColor": "#FFFFFF",
			  "showSubtitle": false,
			  "showInnerStroke": false,
			  //startFromZero": false
		    })
  ],
  declarations: [PlayGameComponent],
  exports: [PlayGameComponent]
})
export class PlayGameComponentModule { }
