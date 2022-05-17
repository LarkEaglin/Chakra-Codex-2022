import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Planet } from '../../models/planets';

 
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.displayPlanets();
  }

  displayPlanets(){
    this.dataService.getPlanets().subscribe(planets => {
      console.log(planets);
      this.planets = planets;
    });
  }


}
