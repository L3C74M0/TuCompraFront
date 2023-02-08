import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HistoriaClinicaService } from 'src/app/services/historia_clinica/historia-clinica.service';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  historiaForm: FormGroup;
  historia: any;
  historias: any
  mascotas: any

  constructor(
    public fb: FormBuilder,
    public historiaClinicaService: HistoriaClinicaService,
    public mascotasService: MascotaService,
    public _router: Router,
    public _location: Location
  ) { }

  refresh(): void {
    this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  ngOnInit(): void {
    this.historiaForm = this.fb.group({
      id: [''],
      fecha_creacion: ['', Validators.required],
      mascota: ['', Validators.required],
    });

    this.mascotasService.getAllMascotas().subscribe(resp => {
      this.mascotas = resp;
    })

    this.historiaClinicaService.getAllHistorias().subscribe(resp => {
      this.historia = resp;
    },
      error => { console.error(error) }
    );

    this.historiaClinicaService.getAllHistorias().subscribe(resp => {
      this.historias = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.historiaClinicaService.saveHistoria(this.historiaForm.value).subscribe(resp => {
      this.refresh();
    },
    )
  }

  eliminar(historia: { id: string; }) {
    this.historiaClinicaService.deleteHistoria(historia.id).subscribe(resp => {
      if (resp === true) {
        this.historia.mascota = null;
        this.historias.pop(historia);
      }
      this.refresh();
    },
    )
  }

  editar(historia: {
    mascota: any; id: any; fecha_creacion: any;
  }) {
    this.historiaForm.setValue({
      id: historia.id,
      fecha_creacion: historia.fecha_creacion,
      mascota: historia.mascota.nombre,
    })
  }

}
