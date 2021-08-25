import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../shared/confirm/confirm.component';
import { ConfirmDialogData } from '../models/confirmDialogData';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(ConfirmComponent, {
        data,
        width: '400px',
        disableClose: true, // disable close on clicking of the background,
      })
      .afterClosed();
  }

  // lazy-load a dialog
  // We need to add the dialogs folder to the tsconfig.app.json
  // in the include section
  // This ensures the dialog components are compiled properly,
  async openDialog(dialogName: string): Promise<MatDialogRef<any>> {
    const chunk = await import(
      `../lazy-loads/${dialogName}/${dialogName}.component`
    );
    const dialogComponent = Object.values(chunk)[0] as ComponentType<unknown>;
    return this.dialog.open(dialogComponent);
  }
}
