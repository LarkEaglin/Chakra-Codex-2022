import {
    trigger,
    transition,
    style,
    animate,
    state
} from '@angular/animations'

  export const fadeAnimation = 
  trigger('fade', [
      state('void', style({opacity:0 })),

      transition('void => *', [
          animate(2000)
      ]),

      transition('* => void', [
          animate(1000)
      ])
  ]) 