import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParametresService {
  url =  'https://guarded-plateau-89843.herokuapp.com/parametres';

  constructor( private http: HttpClient ) { }

  getAllParametres() {
    return this.http.get(this.url);
  }

  getParametreById(id) {
    return this.http.get(this.url + '/' + id);
  }
}
