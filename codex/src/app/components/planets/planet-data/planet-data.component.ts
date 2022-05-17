import { Component, OnInit } from '@angular/core';
import { Chakra } from 'src/app/models/chakras';
import { Crystal } from 'src/app/models/crystals';
import { Astro } from 'src/app/models/astros';
import { Planet } from 'src/app/models/planets';
import { Element } from 'src/app/models/elements';
import { DataService } from 'src/app/services/data.service';
import { Herb } from 'src/app/models/herbs';

@Component({
  selector: 'app-planet-data',
  templateUrl: './planet-data.component.html',
  styleUrls: ['./planet-data.component.scss']
})
export class PlanetDataComponent implements OnInit {

  planet: Planet;
  planetToEdit: Planet;
  planets: Planet[];

  elements: Element[];
  crystals: Crystal[];
  astros: Astro[];
  chakras: Chakra[];
  herbs: Herb[];
  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.references();
    // this.displayPlanets();
    
    console.log(this.planets);
  }

  // displayPlanets(){
  //   this.dataService.getPlanets().subscribe(planets => {
  //     console.log(planets);
  //     this.planets = planets;
  //   });
  // }

  references(){
    this.dataService.getElements().subscribe(elements => {
      this.elements = elements;
    });
    this.dataService.getChakras().subscribe(chakras => {
      this.chakras = chakras;
    });
    this.dataService.getAstros().subscribe(astros => {
      this.astros = astros;
    });
    this.dataService.getPlanets().subscribe(body => {
      this.planets = body;
    });
    this.dataService.getCrystals().subscribe(crystals => {
      this.crystals = crystals;
    });
    this.dataService.getHerbs().subscribe(herbs => {
      this.herbs = herbs;
    });
  }

  choosePlanet(aPlanet: Planet){
    this.dataService.getPlanet(aPlanet.id).subscribe(
      planetRef => {
        this.planetToEdit = planetRef;
      })
  }
  onSubmit(){
    let data = this.dataService.planetForm.value;
    this.dataService.addPlanet(data);
  }

  del(planet: Planet){
    this.dataService.delPlanet(planet);
  }

  pushEl(element: Element){
    this.dataService.getElement(element.id).subscribe(
      elRef => {
        this.dataService.planetsCollection.doc(this.planetToEdit.id).collection('elements').add(elRef);
        console.log('Added ' + elRef.name + ' to ' + this.planetToEdit.name + ' subcollection of elements' ); 
      })
  }
  pushHerb(herb: Herb){
    this.dataService.getHerb(herb.id).subscribe(
      herbRef => {
        this.dataService.planetsCollection.doc(this.planetToEdit.id).collection('herbs').add(herbRef);
        console.log('Added ' + herbRef.name + ' to ' + this.planetToEdit.name + ' subcollection of herbs' ); 
      })
  }
  pushCrystal(crystal: Crystal){
    this.dataService.getCrystal(crystal.id).subscribe(
      crystalRef => {
        this.dataService.planetsCollection.doc(this.planetToEdit.id).collection('crystals').add(crystalRef);
        console.log('Added ' + crystalRef.name + ' to ' + this.planetToEdit.name + ' subcollection of crystals' ); 
      })
  }

  pushChakra(chakra: Chakra){
    this.dataService.getChakra(chakra.id).subscribe(
      chakraRef => {
        this.dataService.planetsCollection.doc(this.planetToEdit.id).collection('chakras').add(chakraRef);
        console.log('Added ' + chakraRef.name + ' to ' + this.planetToEdit.name + ' subcollection of chakras' ); 
      })
  }
}
