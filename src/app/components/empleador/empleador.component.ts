import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EmpleadorService } from 'src/app/services/empleador.service';

@Component({
  selector: 'app-empleador',
  templateUrl: './empleador.component.html',
  styleUrls: ['./empleador.component.css']
})
export class EmpleadorComponent {

  public empleador!: any;

  constructor(private EmpleadorService: EmpleadorService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.empleador = await this.EmpleadorService.getById(id)
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

}
