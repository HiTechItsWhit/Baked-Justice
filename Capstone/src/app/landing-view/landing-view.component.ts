import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

interface Item {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [MatFormField, MatLabel, MatOption, MatSelect],
  templateUrl: './landing-view.component.html',
  styleUrl: './landing-view.component.css',
})
export class LandingViewComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  searchTerm: string = '';
  filterCategory: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      this.filteredItems = data;
    });
  }

  onSearchTermChange(): void {
    this.filterItems();
  }

  onFilterCategoryChange(): void {
    this.filterItems();
  }

  filterItems(): void {
    this.filteredItems = this.items
      .filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter(
        (item) => !this.filterCategory || item.category === this.filterCategory
      );
  }

  selectItem(item: Item): void {
    // Handle item selection and navigation to order view
  }
}
