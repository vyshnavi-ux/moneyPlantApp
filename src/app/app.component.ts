import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'moneyPlantApp';
  pageTitle:string = "Find Expert";
  logoImage:string = "./assets/media/logo.png";

  findExpertForm!:FormGroup;

  ngOnInit(): void {
    this.findExpertForm = new FormGroup({
      location:new FormControl('San Diego CA'),
      tradeExpertSearch:new FormControl('Trade Expert')
    });
  }
}
