import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss','./play-game.media.scss'],
})
export class PlayGameComponent implements OnInit {
  progress = 50;
  timerHandler: number;
  progressText = "Completed";
  currentAnswer ="correct";
  time = "0:08";
  correctAnswers = "70";
  wrongAnswers ="5";
  
  constructor() { }

  ngOnInit() {}

}
