import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ContratacionService } from 'src/app/services/contratacion.service';


@Component({
  selector: 'app-contratacion',
  templateUrl: './contratacion.component.html',
  styleUrls: ['./contratacion.component.css']
})
export class ContratacionComponent {

  public contratacion!: any;
  constructor(private ContratacionService: ContratacionService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.contratacion = await this.ContratacionService.getById(id);
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

  downloadFile() {

  }
}

