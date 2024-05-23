import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, SplitterModule, SidebarComponent],
  template: `
    <shared-navbar />
    <p-splitter
      [panelSizes]="[15, 75]"
      [style]="{ height: '300px' }"
      styleClass="mb-5 min-h-screen"
    >
      <ng-template pTemplate>
        <div class="col flex">
          <shared-sidebar />
        </div>
      </ng-template>
      <ng-template pTemplate>
        <div class="col">
          <router-outlet />
        </div>
      </ng-template>
    </p-splitter>
  `,
  styles: ``,
})
export class LayoutComponent {}
