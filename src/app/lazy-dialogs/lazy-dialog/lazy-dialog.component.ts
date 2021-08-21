import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.scss'],
})
export class LazyDialogComponent implements OnInit {


  ngOnInit(): void {}
}


@NgModule({
  declarations: [LazyDialogComponent],
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule],
})
export class SimpleDialogModule {}
