import { Component, Input } from '@angular/core';
import { CircleVariant } from 'src/app/models/circle';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
  @Input() value: number;
  @Input() variant: CircleVariant = 'grey';
}
