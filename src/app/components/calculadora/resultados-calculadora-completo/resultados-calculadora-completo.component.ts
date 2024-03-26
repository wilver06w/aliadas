import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import Swal from 'sweetalert2';

//Archivos Descargables



@Component({
  selector: 'app-resultados-calculadora-completo',
  templateUrl: './resultados-calculadora-completo.component.html',
  styleUrls: ['./resultados-calculadora-completo.component.css']
})
export class ResultadosCalculadoraCompletoComponent {

  @Input() fecha_inicio!: string;
  @Input() fecha_fin!: string;
  @Input() diasTotalesTrabajados__completo!: number;
  @Input() salario_mensual__completo!: number;
  @Input() auxilio_transporte__completo!: number;
  @Input() seguridadSocial__completo!: number;
  @Input() otros_pagos__completo!: number;
  @Input() salarioMenosDeducciones__completo!: number;
  @Input() cesantias__completo!: number;
  @Input() interesesCesantias__completo!: number;
  @Input() prima__completo!: number;
  @Input() vacaciones__completo!: number;
  @Input() id!: number;
  @Input() primaPrimerSemestre!: boolean;
  @Input() primaSegundoSemestre!: boolean;
  @Input() primaPonderada!: number;
  @Input() showPrimaPonderada!: boolean;
  @Input() diasTotalesTrabajadosPonderado__completo!: number;
  @Input() isPrimaPonderada!: string;


  public misLiquidaciones!: any;
  public selectedItem!: number;
  private fileUri: string | undefined;
  private fileName = 'mi-archivo.txt';
  private contents = '¡Hola, este es mi contenido de archivo!';
  private directory = Directory.Documents;


  constructor(private router: Router) { }

  ngOnInit() {
    this.misLiquidaciones = localStorage.getItem('MIS_LIQUIDACIONES');

    this.misLiquidaciones = JSON.parse(this.misLiquidaciones)
  }

  deleteLiquidacion($event: any) {

    Swal.fire({
      title: 'Eliminar Registro',
      text: "¿Está segura/o que desea eliminar esta liquidación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar ahora!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Liquidación Eliminada!',
        )
        this.selectedItem = +$event.target.parentElement.id;
        this.misLiquidaciones = this.misLiquidaciones.filter((item: { id: any; }) => item.id !== this.selectedItem);

        localStorage.setItem('MIS_LIQUIDACIONES', JSON.stringify(this.misLiquidaciones));

      }
      this.router.navigate(['/calculadora/mis-liquidaciones'])
    })

  }



  async createTxtFile() {
    try {
      const result = await Filesystem.writeFile({
        path: this.fileName,
        data: this.contents,
        directory: this.directory,
      });

      this.fileUri = result.uri;
      console.log('Archivo creado:', this.fileUri);
    } catch (error) {
      console.error('Error al crear el archivo:', error);
    }
  }

  async readSecretFile() {
    try {
      await Filesystem.readFile({
        path: 'secrets/text.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });


      console.log('Archivo creado:');
    } catch (error) {
      console.error('Error al crear el archivo:', error);
    }
  };


  async downloadTxtFile() {

    await downloadFile('https://example.com/hello.zip', '/hello.zip', 'DATA')
  }
















}


function downloadFile(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

