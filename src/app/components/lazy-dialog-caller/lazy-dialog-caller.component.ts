import { Component, OnInit } from '@angular/core';
import { LazyLoadDialogService } from '../../services/lazy-load-dialog.service';

@Component({
  selector: 'app-lazy-dialog-caller',
  templateUrl: './lazy-dialog-caller.component.html',
  styleUrls: ['./lazy-dialog-caller.component.scss'],
})
export class LazyDialogCallerComponent implements OnInit {
  constructor(public lazyDialog: LazyLoadDialogService) {}

  ngOnInit(): void {}
}
