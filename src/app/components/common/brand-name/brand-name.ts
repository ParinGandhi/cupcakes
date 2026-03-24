import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-name',
  imports: [],
  templateUrl: './brand-name.html',
  styleUrl: './brand-name.scss',
})
export class BrandName {
  @Input() name: 'first' | 'second' | 'full' | '' = '';
}
