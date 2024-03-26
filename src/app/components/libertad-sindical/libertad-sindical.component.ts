import { Component } from '@angular/core';
import { LibertadService } from 'src/app/services/libertad.service';

@Component({
  selector: 'app-libertad-sindical',
  templateUrl: './libertad-sindical.component.html',
  styleUrls: ['./libertad-sindical.component.css']
})
export class LibertadSindicalComponent {

  public libertad!: any;

  constructor(private LibertadService: LibertadService) { }

  async ngOnInit(id: string) {
    this.libertad = await this.LibertadService.getById(id)
  }

}
