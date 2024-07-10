import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DessertsService } from '../services/desserts.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',
})
export class OrderFormComponent implements OnInit {
  product: any;
  form: any = {
    date: '',
    quantity: 1,
    name: '',
    email: '',
    phone: '',
    address: '',
  };
  constructor(
    private route: ActivatedRoute,
    private dessertService: DessertsService
  ) {}
  ngOnInit(): void {
    debugger;
    const productId = this.route.snapshot.paramMap.get('id');
    this.dessertService.getProducts().subscribe((data) => {
      this.product = data.products.find((p: any) => p.id + '' === productId);
      this.product.image = 'assets/images/' + this.product.image + '.jpg';
    });
  }
}
