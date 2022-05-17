import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Chakra } from '../../../models/chakras';
import { Element } from '../../../models/elements';
import { Crystal } from '../../../models/crystals';
import { Planet } from '../../../models/planets';
import { Herb } from '../../../models/herbs';import { Observable } from 'rxjs';
;
import { fadeAnimation } from 'src/app/animations/fade';



@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class PlanetDetailsComponent implements OnInit {

  planet: Planet; 
  planets: Planet[]; 
  id: string;
  private sub: any;

  mainImage: Observable<string>;

  elements: Element[];
  chakras: Chakra[];
  crystals: Crystal[];
  herbs: Herb[];
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });

    this.currentPlanet();

    this.subcollections();
  }

  currentPlanet(){
    this.dataService.getPlanet(this.id).subscribe(
      planetRef => {
        this.planet = planetRef;
        console.log(this.planet);
      })
  }

  subcollections(){
    // chakras
    this.dataService.planetsCollection.doc(this.id).collection('chakras').valueChanges().subscribe(
      val => {
        this.chakras = val;
        console.log(this.chakras); }
      )
        // elements
    this.dataService.planetsCollection.doc(this.id).collection('elements').valueChanges().subscribe(
      val => {
        this.elements = val; 
      console.log(this.elements) }
      )

  }

}
