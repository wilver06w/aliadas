import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersServiceService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-formulario-inicio',
  templateUrl: './formulario-inicio.component.html',
  styleUrls: ['./formulario-inicio.component.css']
})
export class FormularioInicioComponent {

  public localSl: any;
  public fecha!: string;
  public isDelete: number = 0;


  createForm: FormGroup;

  constructor(private router: Router, private elRef: ElementRef, private renderer: Renderer2, private CustomerService: CustomersServiceService) {

    this.createForm = new FormGroup({
      tipo: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormGroup('', []),
      isDelete: new FormGroup('', [])
    })
  }

  ngAfterViewInit() {
    const buttonElement = document.querySelector('#buttonModalOpen');

    this.localSl = localStorage.getItem('tokenUser');
    if (this.localSl !== "HJGT5F23DRE08-ALIADAS") {
      if (buttonElement) {
        this.renderer.setProperty(buttonElement, 'disabled', true);
        const clickEvent = new Event('click');
        buttonElement.dispatchEvent(clickEvent);
      }
    } else {
      this.renderer.setProperty(buttonElement, 'disable', true)
      return
    }
  }

  async onSubmit() {
    this.createForm.value.fecha = new Date();
    console.log(this.createForm.value.fecha)

    try {
      let resultado = await this.CustomerService.createCustomer(this.createForm.value);
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }

    this.closeModal();

  }

  closeModal() {
    this.localSl = localStorage.setItem('tokenUser', 'HJGT5F23DRE08-ALIADAS')
  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }
}