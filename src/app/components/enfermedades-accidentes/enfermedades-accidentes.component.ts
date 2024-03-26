import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EnfermedadesService } from 'src/app/services/enfermedades.service';

@Component({
  selector: 'app-enfermedades-accidentes',
  templateUrl: './enfermedades-accidentes.component.html',
  styleUrls: ['./enfermedades-accidentes.component.css']
})
export class EnfermedadesAccidentesComponent {

  public enfermedades!: any;

  constructor(private EnfermedadesService: EnfermedadesService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.enfermedades = await this.EnfermedadesService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

}
