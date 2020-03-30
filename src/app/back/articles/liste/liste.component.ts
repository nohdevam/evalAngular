import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../service/articles.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
articles;

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response: Response) => {
      this.articles = response;
      console.log(this.articles);
    });


  }
}
