import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: any;
  usuarios: any;

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService,
    public _router: Router,
    public _location: Location) { }

  refresh(): void {
    this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento_identificacion: ['', Validators.required],
      estado: ['', Validators.required],
      sexo: ['', Validators.required],
    });

    this.usuarioService.getAllUsuarios().subscribe(resp => {
      this.usuario = resp;
    },
      error => { console.error(error) }
    );

    this.usuarioService.getAllUsuarios().subscribe(resp => {
      this.usuarios = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(resp => {
      this.refresh();
    },
    )
  }

  eliminar(usuario: { id: string; }) {
    this.usuarioService.deleteUsuario(usuario.id).subscribe(resp => {
      if (resp === true) {
        this.usuarios.pop(usuario);
      }
      this.refresh();
    },
    )
  }

  editar(usuario: { id: any; nombre: any; apellido: any; tipo_documento: any; documento_identificacion: any; estado: any; sexo: any; }) {
    this.usuarioForm.setValue({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      tipo_documento: usuario.tipo_documento,
      documento_identificacion: usuario.documento_identificacion,
      estado: usuario.estado,
      sexo: usuario.sexo,
    })
  }
}
