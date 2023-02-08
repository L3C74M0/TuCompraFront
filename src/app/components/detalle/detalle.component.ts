import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DetalleHistoriaClinicaService } from 'src/app/services/detalle_historia_clinica/detalle-historia-clinica.service';
import { HistoriaClinicaService } from 'src/app/services/historia_clinica/historia-clinica.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detalleForm: FormGroup;
  detalle: any;
  detalles: any;
  historias: any

  constructor(
    public fb: FormBuilder,
    public detalleService: DetalleHistoriaClinicaService,
    public _router: Router,
    public _location: Location,
    public historiaClinicaService: HistoriaClinicaService,
  ) { }

  refresh(): void {
    this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  ngOnInit(): void {
    this.detalleForm = this.fb.group({
      id: [''],
      temperatura: ['', Validators.required],
      peso: ['', Validators.required],
      frecuencia_cardiaca: ['', Validators.required],
      frecuencia_respiratoria: ['', Validators.required],
      fecha_hora: ['', Validators.required],
      alimentacion: ['', Validators.required],
      habitad: ['', Validators.required],
      observacion: ['', Validators.required],
      historia_clinica: ['', Validators.required],
    });

    this.historiaClinicaService.getAllHistorias().subscribe(resp => {
      console.log(resp);
      this.historias = resp;
    },
      error => console.error(error)
    )

    this.detalleService.getAllDetalles().subscribe(resp => {
      this.detalle = resp;
    },
      error => { console.error(error) }
    );

    this.detalleService.getAllDetalles().subscribe(resp => {
      this.detalles = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.detalleService.saveDetalle(this.detalleForm.value).subscribe(resp => {
      this.refresh();
    },
    )
  }

  eliminar(detalle: { id: string; }) {
    this.detalleService.deleteDetalle(detalle.id).subscribe(resp => {
      if (resp === true) {
        this.detalle.historia_clinica = null;
        this.detalles.pop(detalle);
      }
      this.refresh();
    },
    )
  }

  editar(detalle: {
    historia_clinica: any; id: any; temperatura: any; peso: any; frecuencia_cardiaca: any; frecuencia_respiratoria: any; fecha_hora: any; alimentacion: any; habitad: any; observacion: any;
  }) {
    this.detalleForm.setValue({
      id: detalle.id,
      temperatura: detalle.temperatura,
      peso: detalle.peso,
      frecuencia_cardiaca: detalle.frecuencia_cardiaca,
      frecuencia_respiratoria: detalle.frecuencia_respiratoria,
      fecha_hora: detalle.fecha_hora,
      alimentacion: detalle.alimentacion,
      habitad: detalle.habitad,
      observacion: detalle.observacion,
      historia_clinica: detalle.historia_clinica.mascota.nombre,
    })
  }
}
