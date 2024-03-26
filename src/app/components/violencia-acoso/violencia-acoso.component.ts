import { Component } from '@angular/core';
import { ViolenciaService } from 'src/app/services/violencia.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-violencia-acoso',
  templateUrl: './violencia-acoso.component.html',
  styleUrls: ['./violencia-acoso.component.css']
})
export class ViolenciaAcosoComponent {

  public violencia!: any;
  public url!: string;

  constructor(private ViolenciaService: ViolenciaService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.violencia = await this.ViolenciaService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }


}
