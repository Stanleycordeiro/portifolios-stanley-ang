import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {




  repos: any = [{}];

  constructor(private profileService: ProfileService) {
    this.getAllRepos();
  }

  getAllRepos(){
    this.profileService.getAllRepos().subscribe(data => {
      this.repos = data;
      console.log(this.repos)
    });
  };


}

