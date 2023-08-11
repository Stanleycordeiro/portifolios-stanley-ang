
import { ProfileService } from './services/profile.service';
import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio-stanley';

  profile: any = [];
  

  constructor(private profileService: ProfileService) {
    this.getUser();
    
  }


  screenOnRepos = true;
  screenOnProfile = false;

  toogleScreenRepos() {
    this.screenOnRepos = true;
    this.screenOnProfile = false;
  }
  
  toogleScreenProfile() {
    this.screenOnProfile = true;
    this.screenOnRepos = false;
  }
  

  getUser() {
    this.profileService.getUser().subscribe(data => {
      this.profile = data;
      console.log(this.profile)
    });
  };
 



}




