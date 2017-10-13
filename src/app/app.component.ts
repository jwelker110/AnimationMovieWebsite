import { Component } from '@angular/core';
import { trigger, transition, animate, style, query, group, state, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerContainerAnimation', [
      state('false', style({ transform: 'translateX(0%)' })),
      state('true', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate('300ms ease-out'))
    ]),
    trigger('codeExampleAnimation', [
      transition('* => false', [
        group([
          query('.router-container', animateChild()),
          query('.code-container', [
            style({ transform: 'translateX(0%)' }),
            animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
          ]),
        ]),
      ]),
      transition('* => true', [
        query('.code-close-surface', [
          style({ opacity: 0 }),
        ]),
        group([
          query('.router-container', animateChild()),
          query('.code-container', [
            style({ transform: 'translateX(100%)' }),
            animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
          ]),
        ]),
        query('.code-close-surface', [
          animate('300ms', style({ opacity: 1 }))
        ]),
      ]),
    ]),
  ]
})
export class AppComponent {
  showCodeExample = false;
}