import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-seguridad-social',
  templateUrl: './seguridad-social.component.html',
  styleUrls: ['./seguridad-social.component.css']
})
export class SeguridadSocialComponent {

  public seguridad!: any;

  constructor(private SeguridadService: SeguridadService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.seguridad = await this.SeguridadService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

}
