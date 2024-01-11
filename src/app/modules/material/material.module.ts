import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULOS EXPORTADOS DE ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MaterialModule { }
