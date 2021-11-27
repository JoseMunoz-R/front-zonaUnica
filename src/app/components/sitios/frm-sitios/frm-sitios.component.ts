import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-sitios',
  templateUrl: './frm-sitios.component.html',
  styleUrls: ['./frm-sitios.component.scss']
})
export class FrmSitiosComponent implements OnInit {
  frmRegSitio:FormGroup;
  validationMessage={
    nombre: [
      {type: 'required', message: 'El campo nombre es requerido'}
    ]
  }
  constructor(private fb: FormBuilder) { 
    this.frmRegSitio=this.fb.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl('', Validators.compose([Validators.required])),
      fotos: new FormControl('', Validators.compose([Validators.required])),
      //usuario: Usuario;
      plato: new FormControl(''),
      municipio: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

}
