import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SalarioService } from 'src/app/services/salario.service';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent {

  public salario!: any;

  constructor(private SalarioService: SalarioService, private sanitizer: DomSanitizer) { }


  async ngOnInit(id: string) {
    this.salario = await this.SalarioService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }


}
