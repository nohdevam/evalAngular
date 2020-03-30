import { Component, OnInit } from '@angular/core';
import { ParametresService } from '../../service/parametres.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {
parametres;
  constructor(
    private service : ParametresService) { }

  ngOnInit(): void {
    this.service.getAllParametres()
    .subscribe((response : Response) => {
      this.parametres = response;
    })
  }

}
