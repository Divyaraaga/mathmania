import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.scss','./welcome-user.button.scss'],
})

export class WelcomeUserComponent implements OnInit {

  constructor(private router: Router) { }
  
  optionSelected = ['add','subtract','multiply' ];
  questionCount=10;
  difficulty= 'Warming Up';
  
  ngOnInit() {
  	
  }
  
  goBtn(){
  	this.router.navigate(['/game']);
  }
  
  selectDifficulty(difficulty){
  	this.difficulty = difficulty
  	console.log(this.difficulty);
  }
  
}
