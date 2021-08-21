import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// lazy loading a dialog
// We need to add the dialogs folder to the tsconfig.app.json
// in the include section.
// This ensures the dialog components are compiled properly,

@Injectable({
  providedIn: 'root',
})
export class LazyLoadDialogService {
  constructor(private dialog: MatDialog) {}

  async openDialog(dialogName: string): Promise<MatDialogRef<any>> {
    const chunk = await import(
      `../lazy-dialogs/${dialogName}/${dialogName}.component`
    );
    const dialogComponent = Object.values(chunk)[0] as ComponentType<unknown>;
    return this.dialog.open(dialogComponent);
  }
}
