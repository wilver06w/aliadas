import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-trabajo-domestico',
  templateUrl: './trabajo-domestico.component.html',
  styleUrls: ['./trabajo-domestico.component.css']
})
export class TrabajoDomesticoComponent {

  public trabajo!: any;

  constructor(private TrabajoService: TrabajoService, private sanitizer: DomSanitizer) { }

  async ngOnInit(id: string) {
    this.trabajo = await this.TrabajoService.getById(id)
  }

  formatTextAsHtml(htmlString: string): SafeHtml {
    if (htmlString) {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      return '';
    }
  }

}
