import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles;
  constructor(private service: ArticlesService) {

  }

  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response: Response) => {
      this.articles = response;
      console.log(this.articles);


    });
  }

}
