import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aliadas App';

  constructor(private router: Router) { }

  ngOnInit() {
    if (Capacitor.isNative) {
      App['addListener']('backButton', () => {
        if (this.router.url === '/') {
          App.exitApp()
        } else {
          window.history.back();
        }
      });
    }
  }




}
