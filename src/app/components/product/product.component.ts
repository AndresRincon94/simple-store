import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IProduct } from '../../services/IProduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: IProduct;

  constructor() { } 

  ngOnInit(): void {
  }
}
