import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-card',
  templateUrl: './responsive-card.component.html',
  styleUrls: ['./responsive-card.component.scss'],
})
export class ResponsiveCardComponent implements OnInit {
  gridColumns: number = 3;
  constructor() {}

  ngOnInit(): void {}

  // put this in app.component.html to test it
  // <app-responsive-card></app-responsive-card>
}
