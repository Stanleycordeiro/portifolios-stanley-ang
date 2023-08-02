import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = 'https://api.github.com/users/Stanleycordeiro';



  constructor(public httpClient: HttpClient) { }



  getUser() {
    return this.httpClient.get(this.url);
  }

  getAllRepos() {
    return this.httpClient.get(`${this.url}/repos`);
  }

}
