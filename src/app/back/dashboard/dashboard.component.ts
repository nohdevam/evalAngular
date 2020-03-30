import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { ArticlesService } from '../../service/articles.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
utilisateurs;
articles;
  constructor(private router : ActivatedRoute,
              private service : UserService,
              private serviceA : ArticlesService) { }

  ngOnInit(): void {
    this.service.getAllUsers()
    .subscribe((response : Response) => {
      this.utilisateurs = response;
      (console.log (this.utilisateurs))
    });
    this.serviceA.getAllArticles()
    .subscribe((response : Response) => {
      this.articles = response;
      console.log(this.articles)
    });


  }

}
