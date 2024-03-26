import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LicenciasService } from 'src/app/services/licencias.service';

@Component({
  selector: 'app-licencias-permisos',
  templateUrl: './licencias-permisos.component.html',
  styleUrls: ['./licencias-permisos.component.css']
})
export class LicenciasPermisosComponent {

  public licencias!: any;

  constructor(private LicenciasService: LicenciasService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.licencias = await this.LicenciasService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

}
