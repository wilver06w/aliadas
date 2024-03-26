import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora-home/calculadora-home.component';
import { MisDerechosComponent } from './components/mis-derechos/mis-derechos.component';
import { GuiaEntidadesComponent } from './components/guia-entidades/guia-entidades.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';
import { ViolenciaAcosoComponent } from './components/violencia-acoso/violencia-acoso.component';
import { LibertadSindicalComponent } from './components/libertad-sindical/libertad-sindical.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { EmpleadorComponent } from './components/empleador/empleador.component';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { SobreAliadasComponent } from './components/sobre-aliadas/sobre-aliadas.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';
import { JornadaLaboralComponent } from './components/jornada-laboral/jornada-laboral.component';
import { SalarioComponent } from './components/salario/salario.component';
import { SeguridadSocialComponent } from './components/seguridad-social/seguridad-social.component';
import { BeneficiosLaboralesComponent } from './components/beneficios-laborales/beneficios-laborales.component';
import { EnfermedadesAccidentesComponent } from './components/enfermedades-accidentes/enfermedades-accidentes.component';
import { LicenciasPermisosComponent } from './components/licencias-permisos/licencias-permisos.component';
import { TrabajoDomesticoComponent } from './components/trabajo-domestico/trabajo-domestico.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { ActualidadFormComponent } from './dashboard/actualidad-form/actualidad-form.component';
import { ViolenciaFormularioComponent } from './dashboard/violencia-formulario/violencia-formulario.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TrabajodomesticoFormularioComponent } from './dashboard/trabajodomestico-formulario/trabajodomestico-formulario.component';
import { ContratacionFormularioComponent } from './dashboard/contratacion-formulario/contratacion-formulario.component';
import { JornadalaboralFormularioComponent } from './dashboard/jornadalaboral-formulario/jornadalaboral-formulario.component';
import { SalarioFormularioComponent } from './dashboard/salario-formulario/salario-formulario.component';
import { SeguridadsocialFormularioComponent } from './dashboard/seguridadsocial-formulario/seguridadsocial-formulario.component';
import { BeneficioslaboralesFormularioComponent } from './dashboard/beneficioslaborales-formulario/beneficioslaborales-formulario.component';
import { EnfermedadesFormularioComponent } from './dashboard/enfermedades-formulario/enfermedades-formulario.component';
import { LicenciasFormularioComponent } from './dashboard/licencias-formulario/licencias-formulario.component';
import { LibertadFormularioComponent } from './dashboard/libertad-formulario/libertad-formulario.component';
import { EmpleadorFormularioComponent } from './dashboard/empleador-formulario/empleador-formulario.component';
import { HomedashComponent } from './dashboard/homedash/homedash.component';
import { ActualidadDetailComponent } from './components/actualidad-detail/actualidad-detail.component';
import { ActualidaddashlistComponent } from './dashboard/actualidaddashlist/actualidaddashlist.component';
import { ActualidaddashdetailComponent } from './dashboard/actualidaddashdetail/actualidaddashdetail.component';
import { ActualidaddasheditComponent } from './dashboard/actualidaddashedit/actualidaddashedit.component';
import { CalculadoraRoutingComponent } from './components/calculadora/calculadora-routing/calculadora-routing.component';
import { CalculadoraCompletoComponent } from './components/calculadora/calculadora-completo/calculadora-completo.component';
import { CalculadoraDiasComponent } from './components/calculadora/calculadora-dias/calculadora-dias.component';
import { CalculadoraHorasComponent } from './components/calculadora/calculadora-horas/calculadora-horas.component';
import { ResultadosCalculadoraCompletoComponent } from './components/calculadora/resultados-calculadora-completo/resultados-calculadora-completo.component';
import { ResultadosCalculadoraDiasComponent } from './components/calculadora/resultados-calculadora-dias/resultados-calculadora-dias.component';
import { ResultadosCalculadoraHorasComponent } from './components/calculadora/resultados-calculadora-horas/resultados-calculadora-horas.component';
import { MisLiquidacionesComponent } from './components/calculadora/mis-liquidaciones/mis-liquidaciones.component';
import { MiLiquidacionCompletoComponent } from './components/calculadora/mi-liquidacion-completo/mi-liquidacion-completo.component';
import { MiLiquidacionHorasComponent } from './components/calculadora/mi-liquidacion-horas/mi-liquidacion-horas.component';
import { MiLiquidacionDiasComponent } from './components/calculadora/mi-liquidacion-dias/mi-liquidacion-dias.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './dashboard/customers/customers.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "calculadora", component: CalculadoraRoutingComponent, children: [
      { path: '', component: CalculadoraComponent },
      { path: 'tiempo-completo', component: CalculadoraCompletoComponent },
      { path: 'salario-dias', component: CalculadoraDiasComponent },
      { path: 'salario-horas', component: CalculadoraHorasComponent },
      { path: 'resultado-completo', component: ResultadosCalculadoraCompletoComponent },
      { path: 'resultado-dias', component: ResultadosCalculadoraDiasComponent },
      { path: 'resultado-horas', component: ResultadosCalculadoraHorasComponent },
      { path: 'mis-liquidaciones', component: MisLiquidacionesComponent },
      { path: 'mi-liquidacion-completo/:id', component: MiLiquidacionCompletoComponent },
      { path: 'mi-liquidacion-horas/:id', component: MiLiquidacionHorasComponent },
      { path: 'mi-liquidacion-dias/:id', component: MiLiquidacionDiasComponent }
    ]
  },
  { path: "misderechos", component: MisDerechosComponent },
  { path: "guiaentidades", component: GuiaEntidadesComponent },
  { path: "actualidad", component: ActualidadComponent },
  { path: "actualidad/:id", component: ActualidadDetailComponent },
  { path: "violenciaacoso", component: ViolenciaAcosoComponent },
  { path: "libertadsindical", component: LibertadSindicalComponent },
  { path: "denuncia", component: DenunciaComponent },
  { path: "empleador", component: EmpleadorComponent },
  { path: "organizaciones", component: OrganizacionesComponent },
  { path: "sobrealiadas", component: SobreAliadasComponent },
  { path: "terminosycondiciones", component: TerminosycondicionesComponent },
  { path: "jornadalaboral", component: JornadaLaboralComponent },
  { path: "salario/:id", component: SalarioComponent },
  { path: "seguridadsocial", component: SeguridadSocialComponent },
  { path: "beneficioslaborales", component: BeneficiosLaboralesComponent },
  { path: "enfermedadesaccidentes", component: EnfermedadesAccidentesComponent },
  { path: "licenciaspermisos", component: LicenciasPermisosComponent },
  { path: "trabajodomestico/:id", component: TrabajoDomesticoComponent },
  { path: "contratacion/:id", component: ContratacionComponent },
  { path: "login", component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard, AdminGuard], children: [
      { path: '', component: HomedashComponent },
      { path: 'trabajodomestico/:id', component: TrabajodomesticoFormularioComponent },
      { path: 'contratacion/:id', component: ContratacionFormularioComponent },
      { path: 'jornada/:id', component: JornadalaboralFormularioComponent },
      { path: 'salario/:id', component: SalarioFormularioComponent },
      { path: 'seguridadsocial/:id', component: SeguridadsocialFormularioComponent },
      { path: 'beneficios/:id', component: BeneficioslaboralesFormularioComponent },
      { path: 'enfermedades/:id', component: EnfermedadesFormularioComponent },
      { path: 'licencias/:id', component: LicenciasFormularioComponent },
      { path: "actualidad", component: ActualidadFormComponent },
      { path: "actualidadlist", component: ActualidaddashlistComponent },
      { path: "actualidaddetail/:id", component: ActualidaddashdetailComponent },
      { path: "actualidadedit/:id", component: ActualidaddasheditComponent },
      { path: "violencia/:id", component: ViolenciaFormularioComponent },
      { path: "libertad/:id", component: LibertadFormularioComponent },
      { path: "empleador/:id", component: EmpleadorFormularioComponent },
      { path: "customers", component: CustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
