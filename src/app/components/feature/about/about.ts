import { Component } from '@angular/core';
import { BrandName } from "../../common/brand-name/brand-name";

@Component({
  selector: 'app-about',
  imports: [BrandName],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
