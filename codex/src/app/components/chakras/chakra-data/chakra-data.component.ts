import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Chakra } from '../../../models/chakras';
import { Element } from '../../../models/elements';
import { Planet } from '../../../models/planets';
import { Crystal } from '../../../models/crystals';
import { Astro } from '../../../models/astros';
import { Herb } from 'src/app/models/herbs';
import { Solid } from 'src/app/models/solids';

@Component({
  selector: 'app-chakra-data',
  templateUrl: './chakra-data.component.html',
  styleUrls: ['./chakra-data.component.scss']
})
export class ChakraDataComponent implements OnInit {
  chakra: Chakra;
  chakraToEdit: Chakra;
  chakras: Chakra[];


  elements: Element[]; 
  crystals: Crystal[];
  astros: Astro[];
  planets: Planet[];
  herbs: Herb[];

  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.references();
    console.log(this.chakras);

  }

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
    this.dataService.getPlanets().subscribe(planets => {
      this.planets = planets;
    });
    this.dataService.getCrystals().subscribe(crystals => {
      this.crystals = crystals;
    });
    this.dataService.getHerbs().subscribe(herbs => {
      this.herbs = herbs;
    });
  }

  chooseChakra(aChakra: Chakra){
    this.dataService.getChakra(aChakra.id).subscribe(
      chakraRef => {
        this.chakraToEdit = chakraRef;
      })
  }




  pushEl(element: Element){
    this.dataService.getElement(element.id).subscribe(
      elRef => {
        this.dataService.chakrasCollection.doc(this.chakraToEdit.id).collection('elements').add(elRef);
        console.log('Added ' + elRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of elements' ); 
      })
  }
  pushCrystal(crystal: Crystal){
    this.dataService.getCrystal(crystal.id).subscribe(
      crystalRef => {
        this.dataService.chakrasCollection.doc(this.chakraToEdit.id).collection('crystals').add(crystalRef);
        console.log('Added ' + crystalRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of crystals' ); 
      })
  }
  pushAstro(astro: Astro){
    this.dataService.getAstro(astro.id).subscribe(
      astroRef => {
        this.dataService.chakrasCollection.doc(this.chakraToEdit.id).collection('astros').add(astroRef);
        console.log('Added ' + astroRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of astros' ); 
      })
  }
  pushPlanet(planet: Planet){
    this.dataService.getPlanet(planet.id).subscribe(
      planetRef => {
        this.dataService.chakrasCollection.doc(this.chakraToEdit.id).collection('planets').add(planetRef);
        console.log('Added ' + planetRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of planets' ); 
      })
  }
  pushHerb(herb: Herb){
    this.dataService.getHerb(herb.id).subscribe(
      herbRef => {
        this.dataService.chakrasCollection.doc(this.chakraToEdit.id).collection('herbs').add(herbRef);
        console.log('Added ' + herbRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of herbs' ); 
      })
  }
  pushSolid(solid: Solid){
    this.dataService.getSolid(solid.id).subscribe(
      solidRef => {
        this.dataService.crystalsCollection.doc(this.chakraToEdit.id).collection('solids').add(solidRef);
        console.log('Added ' + solidRef.name + ' to ' + this.chakraToEdit.name + ' subcollection of solids' ); 
      })
  }

  onSubmit(){
    let data = this.dataService.chakraForm.value;
    this.dataService.addChakra(data);
  }

  updateChakra(chakra: Chakra){
    this.chakraToEdit.id = chakra.id;
    let data = this.dataService.chakraForm.value
  }
  del(chakra: Chakra){
    this.dataService.delChakra(chakra);
  }
  clearEditor(){
    this.chakraToEdit = null;
  }

}
