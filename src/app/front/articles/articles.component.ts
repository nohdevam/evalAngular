import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../service/articles.service';
import { CommentairesService } from '../../service/commentaires.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
article;
commentaires;

  constructor(private router : ActivatedRoute,
              private service : ArticlesService,
              private serviceC : CommentairesService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.service.getArticleById(id)
      .subscribe((response : Response) => {
        this.article = response;
        console.log(this.article)
      })
      this.serviceC.getAllCommentaires()
      .subscribe((response = Response) => {
      this.commentaires = response;
    })
    })
}
}
