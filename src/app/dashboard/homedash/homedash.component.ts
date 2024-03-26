import { Component } from '@angular/core';
import { Actualidad } from 'src/app/interfaces/actualidad.interface';
import { Customer } from 'src/app/interfaces/customer';
import { ActualidadService } from 'src/app/services/actualidad.service';
import { CustomersServiceService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent {

  public customers: Customer[] = [];
  public actualidad: Actualidad[] = [];
  public customersCount!: number;
  public actualidadCount!: number;

  constructor(private CustomersService: CustomersServiceService, private ActualidadService: ActualidadService) { }

  async ngOnInit() {
    this.customers = await this.CustomersService.getAll();
    this.actualidad = await this.ActualidadService.getAll();
    this.customersCount = this.customers.length;
    this.actualidadCount = this.actualidad.length;
  }

}
