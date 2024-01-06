import { Component } from '@angular/core';
import { IProduct } from '../../services/IProduct';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) { } 

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    })
  }
}
