import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'moneyPlantApp';
  pageTitle:string = "Find Expert";
  logoImage:string = "./assets/media/logo.png";
  tradeExpertSearchLength:any;
  findExpertForm!:FormGroup;
  profileLandingPage:boolean = true;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.findExpertForm = this.fb.group({
      location:['San Diego CA',Validators.required],
      tradeExpertSearch:['',Validators.required]
    });
  }
  findExpertPro(){
    this.tradeExpertSearchLength = this.findExpertForm.value.tradeExpertSearch.length;
    if(this.tradeExpertSearchLength > 0){
      this.profileLandingPage = false;
    }else{
      this.profileLandingPage = true;
    }
  }
}
