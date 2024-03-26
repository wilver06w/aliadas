import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersServiceService } from 'src/app/services/customers.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private router: Router, private ActivateRoute: ActivatedRoute, private CustomerService: CustomersServiceService) { }

  public customers!: Customer[];

  async ngOnInit() {
    this.customers = await this.CustomerService.getAll();
  }

  deleteCustomer(id: number) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta noticia?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Noticia eliminada!',
        )
        const response = await this.CustomerService.deleteCustomer(id)
        if (response.affectedRows) {
          this.customers = await this.CustomerService.getAll()
        }
      }
    })

  }
}
