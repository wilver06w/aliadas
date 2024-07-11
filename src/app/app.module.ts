import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';
import { TrabajoDomesticoComponent } from './components/trabajo-domestico/trabajo-domestico.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { JornadaLaboralComponent } from './components/jornada-laboral/jornada-laboral.component';
import { SalarioComponent } from './components/salario/salario.component';
import { SeguridadSocialComponent } from './components/seguridad-social/seguridad-social.component';
import { BeneficiosLaboralesComponent } from './components/beneficios-laborales/beneficios-laborales.component';
import { EnfermedadesAccidentesComponent } from './components/enfermedades-accidentes/enfermedades-accidentes.component';
import { LicenciasPermisosComponent } from './components/licencias-permisos/licencias-permisos.component';
import { ActualidadFormComponent } from './dashboard/actualidad-form/actualidad-form.component';
import { ActualidadService } from './services/actualidad.service';
import { HttpClientModule } from '@angular/common/http';
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
import { ActualidaddashComponent } from './dashboard/actualidaddash/actualidaddash.component';
import { ActualidadDetailComponent } from './components/actualidad-detail/actualidad-detail.component';
import { ActualidaddashlistComponent } from './dashboard/actualidaddashlist/actualidaddashlist.component';
import { ActualidaddashdetailComponent } from './dashboard/actualidaddashdetail/actualidaddashdetail.component';
import { ActualidaddasheditComponent } from './dashboard/actualidaddashedit/actualidaddashedit.component';
import { CalculadoraCompletoComponent } from './components/calculadora/calculadora-completo/calculadora-completo.component';
import { CalculadoraRoutingComponent } from './components/calculadora/calculadora-routing/calculadora-routing.component';
import { CalculadoraDiasComponent } from './components/calculadora/calculadora-dias/calculadora-dias.component';
import { CalculadoraHorasComponent } from './components/calculadora/calculadora-horas/calculadora-horas.component';
import { ResultadosCalculadoraHorasComponent } from './components/calculadora/resultados-calculadora-horas/resultados-calculadora-horas.component';
import { ResultadosCalculadoraDiasComponent } from './components/calculadora/resultados-calculadora-dias/resultados-calculadora-dias.component';
import { ResultadosCalculadoraCompletoComponent } from './components/calculadora/resultados-calculadora-completo/resultados-calculadora-completo.component';
import { MisLiquidacionesComponent } from './components/calculadora/mis-liquidaciones/mis-liquidaciones.component';
import { MiLiquidacionCompletoComponent } from './components/calculadora/mi-liquidacion-completo/mi-liquidacion-completo.component';
import { MiLiquidacionHorasComponent } from './components/calculadora/mi-liquidacion-horas/mi-liquidacion-horas.component';
import { MiLiquidacionDiasComponent } from './components/calculadora/mi-liquidacion-dias/mi-liquidacion-dias.component';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CalculadoraComponent,
    MisDerechosComponent,
    GuiaEntidadesComponent,
    ActualidadComponent,
    ViolenciaAcosoComponent,
    LibertadSindicalComponent,
    DenunciaComponent,
    EmpleadorComponent,
    OrganizacionesComponent,
    SobreAliadasComponent,
    TerminosycondicionesComponent,
    FormularioInicioComponent,
    TrabajoDomesticoComponent,
    ContratacionComponent,
    JornadaLaboralComponent,
    SalarioComponent,
    SeguridadSocialComponent,
    BeneficiosLaboralesComponent,
    EnfermedadesAccidentesComponent,
    LicenciasPermisosComponent,
    ActualidadFormComponent,
    ViolenciaFormularioComponent,
    DashboardComponent,
    TrabajodomesticoFormularioComponent,
    ContratacionFormularioComponent,
    JornadalaboralFormularioComponent,
    SalarioFormularioComponent,
    SeguridadsocialFormularioComponent,
    BeneficioslaboralesFormularioComponent,
    EnfermedadesFormularioComponent,
    LicenciasFormularioComponent,
    LibertadFormularioComponent,
    EmpleadorFormularioComponent,
    HomedashComponent,
    ActualidaddashComponent,
    ActualidadDetailComponent,
    ActualidaddashlistComponent,
    ActualidaddashdetailComponent,
    ActualidaddasheditComponent,
    CalculadoraCompletoComponent,
    CalculadoraRoutingComponent,
    CalculadoraDiasComponent,
    CalculadoraHorasComponent,
    ResultadosCalculadoraHorasComponent,
    ResultadosCalculadoraDiasComponent,
    ResultadosCalculadoraCompletoComponent,
    MisLiquidacionesComponent,
    MiLiquidacionCompletoComponent,
    MiLiquidacionHorasComponent,
    MiLiquidacionDiasComponent,
    LoginComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
  ],
  providers: [ActualidadService, Facebook],
  bootstrap: [AppComponent]
})
export class AppModule { }