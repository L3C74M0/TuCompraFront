import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarioR/usuarios', component: UsuarioComponent },
  { path: 'usuarioR/del/**', component: UsuarioComponent },
  { path: 'mascotaR/mascotas', component: MascotaComponent },
  { path: 'mascotaR/del/**', component: MascotaComponent },
  { path: 'historiaR/historias', component: HistoriaComponent },
  { path: 'historiaR/del/**', component: HistoriaComponent },
  { path: 'detalleR/detalles', component: DetalleComponent },
  { path: 'detalleR/del/**', component: DetalleComponent },
  { path: 'colaboradorR/colaboradores', component: ColaboradorComponent },
  { path: 'colaboradorR/del/**', component: ColaboradorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
