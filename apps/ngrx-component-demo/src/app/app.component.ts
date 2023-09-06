import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DbOutputComponent } from './components/db-output/db-output.component';

@Component({
  standalone: true,
  imports: [DbOutputComponent, RouterModule],
  selector: 'ncd-root',
  template: `<ncd-db-output></ncd-db-output> <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'ngrx-component-demo';
}
