import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { TableComponent } from './components/table/table.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HomeModule { }
