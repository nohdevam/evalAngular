import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url =  'https://guarded-plateau-89843.herokuapp.com/utilisateurs';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }

  getUserById(id) {
    return this.http.get(this.url + '/' + id);
  }


}
