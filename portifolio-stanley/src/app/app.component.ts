
import { ProfileService } from './services/profile.service';
import { Component, OnInit } from '@angular/core';



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



  getUser() {
    this.profileService.getUser().subscribe(data => {
      this.profile = data;
      console.log(this.profile)
    });
  };

 

 


}




