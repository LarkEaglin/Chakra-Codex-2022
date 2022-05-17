import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';
import { IndexItem } from '../../models/index';
import { Image } from '../../models/images';


import { fadeAnimation } from '../../animations/fade'
import { listAnimation } from '../../animations/listAnimation'
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations:[
    fadeAnimation,
    listAnimation
  ]
})
export class HomepageComponent implements OnInit {

  sortBy: string;
  indexSearch: string;

  index: IndexItem[];

  constructor(
    private indexService: IndexService
  ) { }

  ngOnInit() {
    this.indexService.retrieveItems();
    this.index = this.indexService.index;
    console.log('I can see this index:', this.index);
  }


  show = false;
  get stateName(){
    return this.show ? 'show' : 'hide'
  }
  toggle(){
    this.show = !this.show;
  }
  
}
