import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-guia-entidades',
  templateUrl: './guia-entidades.component.html',
  styleUrls: ['./guia-entidades.component.css']
})
export class GuiaEntidadesComponent {

  url!: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const urlToEmbed = 'https://aliadas.co/guia-de-entidades-app/';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlToEmbed);
  }
}
