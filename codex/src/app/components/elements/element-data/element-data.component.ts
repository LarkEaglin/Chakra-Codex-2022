import { Component, OnInit } from '@angular/core';
import { Chakra } from 'src/app/models/chakras';
import { Crystal } from 'src/app/models/crystals';
import { Astro } from 'src/app/models/astros';
import { Planet } from 'src/app/models/planets';
import { Element } from 'src/app/models/elements';
import { Herb } from 'src/app/models/herbs';
import { DataService } from 'src/app/services/data.service';
import { Solid } from 'src/app/models/solids';

@Component({
  selector: 'app-element-data',
  templateUrl: './element-data.component.html',
  styleUrls: ['./element-data.component.scss']
})
export class ElementDataComponent implements OnInit {
  element: Element;
  elementToEdit: Element;
  elements: Element[];
   
  chakras: Chakra[];
  crystals: Crystal[];
  astros: Astro[];
  planets: Planet[];
  herbs: Herb[];
  
  
  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.references();
    this.resetForm();
  }

  resetForm(){
    this.dataService.elementForm.reset();
    this.dataService.elementForm.setValue({
      name: '',
      tools: '',
      symbolism: 'Index',
      direction: '',
      color: '',
      qualities: '',
      geometry: '',
      polarity: ''
    });
   
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
      console.log(astros)
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

  chooseElement(anElement: Element){
    this.dataService.getElement(anElement.id).subscribe(
      elementRef => {
        this.elementToEdit = elementRef;
      })
  }
  onSubmit(){
    let data = this.dataService.elementForm.value;
    this.dataService.addElement(data);
    this.resetForm();
  }

  del(element: Element){
    this.dataService.delElement(element);
  }

  pushHerb(herb: Herb){
    this.dataService.getHerb(herb.id).subscribe(
      herbRef => {
        this.dataService.elementsCollection.doc(this.elementToEdit.id).collection('herbs').add(herbRef);
        console.log('Added ' + herbRef.name + ' to ' + this.elementToEdit.name + ' subcollection of herbs' ); 
      })
  }
  pushCrystal(crystal: Crystal){
    this.dataService.getCrystal(crystal.id).subscribe(
      crystalRef => {
        this.dataService.elementsCollection.doc(this.elementToEdit.id).collection('crystals').add(crystalRef);
        console.log('Added ' + crystalRef.name + ' to ' + this.elementToEdit.name + ' subcollection of crystals' ); 
      })
  }
  pushAstro(astro: Astro){
    this.dataService.getAstro(astro.id).subscribe(
      astroRef => {
        this.dataService.elementsCollection.doc(this.elementToEdit.id).collection('astros').add(astroRef);
        console.log('Added ' + astroRef.name + ' to ' + this.elementToEdit.name + ' subcollection of astros' ); 
      })
  }
  pushPlanet(planet: Planet){
    this.dataService.getPlanet(planet.id).subscribe(
      planetRef => {
        this.dataService.elementsCollection.doc(this.elementToEdit.id).collection('planets').add(planetRef);
        console.log('Added ' + planetRef.name + ' to ' + this.elementToEdit.name + ' subcollection of planets' ); 
      })
  }
  pushChakra(chakra: Chakra){
    this.dataService.getChakra(chakra.id).subscribe(
      chakraRef => {
        this.dataService.elementsCollection.doc(this.elementToEdit.id).collection('chakras').add(chakraRef);
        console.log('Added ' + chakraRef.name + ' to ' + this.elementToEdit.name + ' subcollection of chakras' ); 
      })
  }
  pushSolid(solid: Solid){
    this.dataService.getSolid(solid.id).subscribe(
      solidRef => {
        this.dataService.crystalsCollection.doc(this.elementToEdit.id).collection('solids').add(solidRef);
        console.log('Added ' + solidRef.name + ' to ' + this.elementToEdit.name + ' subcollection of solids' ); 
      })
  }
}
