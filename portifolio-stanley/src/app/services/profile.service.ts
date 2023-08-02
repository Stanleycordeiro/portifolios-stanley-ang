import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Profile } from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = 'https://api.github.com/users/Stanleycordeiro';

  profile = new Object();

  constructor(private httpClient: HttpClient) {  }



  getUser() {
    return this.httpClient.get(this.url).subscribe(data => {
      this.profile = data;
      console.log(this.profile);
    })
  }

  

}
