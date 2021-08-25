import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'crm-confirm-caller',
  templateUrl: './confirm-caller.component.html',
  styleUrls: ['./confirm-caller.component.scss'],
})
export class ConfirmCallerComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  yesNoDialog() {
    this.dialogService.confirmDialog({
      title: 'Title',
      message: 'Are you sure you want to do this?',
      confirmText: 'Yes',
      cancelText: 'No',
    });
  }

  confirmCancel() {
    this.dialogService.confirmDialog({
      title: 'Please confirm action',
      message: 'Please confirm whether you want to do this!',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
    });
  }

  yesNotSure() {
    this.dialogService.confirmDialog({
      title: 'Are you sure?',
      message: 'Are you sure you want to do this?',
      confirmText: 'Yes',
      cancelText: 'Not sure!',
    });
  }
}
