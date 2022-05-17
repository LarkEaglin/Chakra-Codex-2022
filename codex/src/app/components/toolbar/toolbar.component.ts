import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/fade';
import { IndexItem } from '../../models';
import { IndexService } from '../../services/index.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class ToolbarComponent implements OnInit {
  index: IndexItem[];
  constructor(private indexService: IndexService) { }

  ngOnInit() {
    // this.indexService.retrieveItems();
    // this.index = this.indexService.index;
  }
  show = false;
  get stateName(){
    return this.show ? 'show' : 'hide'
  }
  toggle(){
    this.show = !this.show;
  }
}
