import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actualidad } from 'src/app/interfaces/actualidad.interface';
import { ActualidadService } from 'src/app/services/actualidad.service';

@Component({
  selector: 'app-actualidad-detail',
  templateUrl: './actualidad-detail.component.html',
  styleUrls: ['./actualidad-detail.component.css']
})
export class ActualidadDetailComponent {

  miNoticia: Actualidad | any;


  constructor(private router: Router, private ActivateRoute: ActivatedRoute, private ActualidadServices: ActualidadService) { }

  ngOnInit(): void {
    this.ActivateRoute.params.subscribe(async params => {
      let id = parseInt(params['id'])
      this.miNoticia = await this.ActualidadServices.getById(id);
    })
  }
}
