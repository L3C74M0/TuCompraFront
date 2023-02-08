import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { MascotaComponent } from './mascota/mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoriaComponent } from './historia/historia.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UsuarioComponent,
    MascotaComponent,
    HistoriaComponent,
    DetalleComponent,
    ColaboradorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavbarComponent,
    UsuarioComponent,
    MascotaComponent,
    HistoriaComponent,
    DetalleComponent,
    ColaboradorComponent
  ]
})
export class ComponentsModule { }
