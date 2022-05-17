import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Element } from '../../models/elements';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {


  elements: Element[];

  constructor(
    private dataService: DataService ) { }

  ngOnInit() {
    this.displayPhases();
  }

  displayPhases(){
    this.dataService.getElements().subscribe(elements => {
      console.log(elements);
      this.elements = elements;
    });
  }

}
