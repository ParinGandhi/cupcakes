import { Component } from '@angular/core';
import { BrandName } from "../../common/brand-name/brand-name";

@Component({
  selector: 'app-header',
  imports: [BrandName],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
