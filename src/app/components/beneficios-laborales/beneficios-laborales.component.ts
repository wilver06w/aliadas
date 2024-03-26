import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BeneficiosService } from 'src/app/services/beneficios.service';

@Component({
  selector: 'app-beneficios-laborales',
  templateUrl: './beneficios-laborales.component.html',
  styleUrls: ['./beneficios-laborales.component.css']
})
export class BeneficiosLaboralesComponent {

  public beneficios!: any;

  constructor(private BeneficiosService: BeneficiosService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.beneficios = await this.BeneficiosService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }



}
