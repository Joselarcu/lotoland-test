import { Component, Input, OnInit } from '@angular/core';
import { CircleVariant } from 'src/app/models/circle';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {
  @Input() value: number;
  @Input() variant: CircleVariant = 'grey';

  constructor() {}

  ngOnInit(): void {}
}
