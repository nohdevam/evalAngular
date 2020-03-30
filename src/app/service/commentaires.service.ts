import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  url =  'https://guarded-plateau-89843.herokuapp.com/commentaires';

  constructor(private http: HttpClient ) { }

  getAllCommentaires() {
    return this.http.get(this.url);
  }

  getCommentaireById(id) {
    return this.http.get(this.url + '/' + id);
  }
}

