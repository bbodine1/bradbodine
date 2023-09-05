import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'ncd-root',
  template: `<ncd-nx-welcome></ncd-nx-welcome> <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'ngrx-component-demo';
}
