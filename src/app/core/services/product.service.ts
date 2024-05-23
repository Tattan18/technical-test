import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      quantity: 10,
      inventoryStatus: 'INSTOCK',
      category: 'Category 1',
      rating: 5,
      image: 'imagen1.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 2',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 3',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description 4',
      price: 200,
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      category: 'Category 4',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description 5',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 5',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description 6',
      price: 200,
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      category: 'Category 6',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description 7',
      price: 200,
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      category: 'Category 7',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description 8',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 8',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description 9',
      price: 200,
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      category: 'Category 9',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description 10',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 10',
      rating: 4,
      image: 'imagen2.webp',
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'Description 11',
      price: 200,
      quantity: 20,
      inventoryStatus: 'LOWSTOCK',
      category: 'Category 11',
      rating: 4,
      image: 'imagen2.webp',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product> {
    product.id = this.createId();
    this.products.push(product);
    return of(product);
  }

  updateProduct(product: Product): Observable<Product | null> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return of(product);
    }
    return of(null);
  }

  deleteProduct(id: number): Observable<void> {
    this.products = this.products.filter((p) => p.id !== id);
    return of();
  }

  private createId(): number {
    return this.products.length > 0
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 1;
  }
}
