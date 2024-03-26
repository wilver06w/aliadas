import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JornadaService } from 'src/app/services/jornada.service';


@Component({
  selector: 'app-jornada-laboral',
  templateUrl: './jornada-laboral.component.html',
  styleUrls: ['./jornada-laboral.component.css']
})
export class JornadaLaboralComponent {

  public jornada!: any;

  constructor(private JornadaService: JornadaService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.jornada = await this.JornadaService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }



}
