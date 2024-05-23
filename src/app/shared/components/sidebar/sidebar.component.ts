import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [MenuModule, BadgeModule, AvatarModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: '/dashboard',
          },
          {
            label: 'Lista de Productos',
            icon: 'pi pi-fw pi-list',
            routerLink: '/dashboard/products',
          },
        ],
      },
    ];
  }
}
