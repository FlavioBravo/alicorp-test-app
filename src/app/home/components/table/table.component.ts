import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { AlicorpModel } from '../../models/alicorpModel';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Descripcion', 'Accion'];
  dataSource!: AlicorpModel[];  

  constructor(private firebaseServiceService :FirebaseServiceService,
              public dialog: MatDialog) {
    this.getListItem();
   }

  ngOnInit(): void {}

  getListItem() {
    this.firebaseServiceService.getListAlicorp()
    .subscribe((res: any) => {
      const array = res.map( (res :any) => ({
          codigo: res.payload.doc.data().codigo,
          nombre: res.payload.doc.data().nombre,
          descripcion: res.payload.doc.data().descripcion,
          id: res.payload.doc.id
        })
      );
      this.dataSource = [...array];
    });
  }

  deleteItem(id: string) {
    this.firebaseServiceService.deleteItemAlicorp(id);
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '300px',
      height: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem(id);
      }
    });
  }
}
