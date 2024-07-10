import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MatChipsModule } from '@angular/material/chips';
import { OrderFormComponent } from '../order-form/order-form.component';
import { DessertListComponent } from '../dessert-list/dessert-list.component';
import { DessertsService } from '../services/desserts.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { products } from '../models/desserts';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SearchComponent,
    MatChipsModule,
    OrderFormComponent,
    DessertListComponent,
    MatCardModule,
    CommonModule,
    MatExpansionModule,
    RouterLink,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  products: products[] = [];
  orignalProducts: products[] = [];
  constructor(
    private dessertService: DessertsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.dessertService.getProducts().subscribe((data) => {
      this.products = data.products;
      this.products.forEach((element) => {
        element.image = 'assets/images/' + element.image + '.jpg';
      });
      this.orignalProducts = this.products;
    });
  }
  onSearchTextChanged(productName: string) {
    if (productName || productName !== '') {
      this.products = this.orignalProducts.filter((fruit) =>
        fruit.productName?.toLowerCase().includes(productName.toLowerCase())
      );
    } else this.products = this.orignalProducts;
  }
  categoryFilter(category: any) {
    if (category !== 'all') {
      this.products = this.orignalProducts.filter((fruit) =>
        fruit.categories?.toLowerCase().includes(category.toLowerCase())
      );
    } else {
      this.products = this.orignalProducts;
    }
  }
}
