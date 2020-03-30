import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  utilisateurs;
  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers()
  .subscribe((response = Response) => {
    this.utilisateurs = response;
  }) }

}
