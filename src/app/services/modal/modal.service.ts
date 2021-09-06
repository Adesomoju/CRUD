import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from '../../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog) { }

  Alert(data: any) {
		let dialogRef: MatDialogRef<AlertComponent>;
		dialogRef = this.matDialog.open(AlertComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}
}
