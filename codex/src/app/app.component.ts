import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader} from './animations/routerAnimations';
import { fadeAnimation } from 'src/app/animations/fade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    fader,
    fadeAnimation
  ]
})
export class AppComponent {
  title = 'codex';


}
