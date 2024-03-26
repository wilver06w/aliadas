import { Component } from '@angular/core';
import { Actualidad } from 'src/app/interfaces/actualidad.interface';
import { ActualidadService } from 'src/app/services/actualidad.service';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent {

  public noticia!: Actualidad[];

  constructor(private ActualidadService: ActualidadService) { }

  async ngOnInit() {
    this.noticia = await this.ActualidadService.getAll();
  }

}
