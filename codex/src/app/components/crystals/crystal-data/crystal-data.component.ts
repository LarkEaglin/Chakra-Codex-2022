import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Chakra } from '../../../models/chakras';
import { Crystal } from '../../../models/crystals';
import { Astro } from '../../../models/astros';
import { Planet } from '../../../models/planets';
import { Element } from '../../../models/elements';
import { Attribute } from '../../../models/attributes';
import { Solid } from '../../../models/solids';

@Component({
  selector: 'app-crystal-data',
  templateUrl: './crystal-data.component.html',
  styleUrls: ['./crystal-data.component.scss']
})
export class CrystalDataComponent implements OnInit {

  crystalToEdit: Crystal;
  crystals: Crystal[];

  elements: Element[];
  chakras: Chakra[];
  astros: Astro[];
  planets: Planet[];
  attributes: Attribute[];
  solids: Solid[];
  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.references();
  }
  references(){
    this.dataService.getCrystals().subscribe(crystals => {
      this.crystals = crystals;
    });
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
    this.dataService.getAttributes().subscribe(attributes => {
      this.attributes = attributes;
    });
  }
  onSubmit(){
    let data = this.dataService.crystalForm.value;
    console.log(data);
    this.dataService.addCrystal(data);
  }

  del(crystal: Crystal){
    this.dataService.delCrystal(crystal);
  }

  chooseCrystal(crystal: Crystal){
    this.dataService.getCrystal(crystal.id).subscribe(
      crystalRef => {
        this.crystalToEdit = crystalRef;
      })
  }
  pushEl(element: Element){
    this.dataService.getElement(element.id).subscribe(
      elRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('elements').add(elRef);
        console.log('Added ' + elRef.name + ' to ' + this.crystalToEdit.name + ' subcollection of elements' ); 
      })
  }
  pushAstro(astro: Astro){
    this.dataService.getAstro(astro.id).subscribe(
      astroRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('astros').add(astroRef);
        console.log('Added ' + astroRef.name + ' to ' + this.crystalToEdit.name + ' subcollection of astros' ); 
      })
  }
  pushPlanet(planet: Planet){
    this.dataService.getPlanet(planet.id).subscribe(
      planetRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('planets').add(planetRef);
        console.log('Added ' + planetRef.name + ' to ' + this.crystalToEdit.name + ' subcollection of planets' ); 
      })
  }
  pushChakra(chakra: Chakra){
    this.dataService.getChakra(chakra.id).subscribe(
      chakraRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('chakras').add(chakraRef);
        console.log('Added ' + chakraRef.name + ' to ' + this.crystalToEdit.name + ' subcollection of chakras' ); 
      })
  }
  pushSolid(solid: Solid){
    this.dataService.getSolid(solid.id).subscribe(
      solidRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('solids').add(solidRef);
        console.log('Added ' + solidRef.name + ' to ' + this.crystalToEdit.name + ' subcollection of solids' ); 
      })
  }
  pushAttribute(attribute: Attribute){
    this.dataService.getAttribute(attribute.id).subscribe(
      attributeRef => {
        this.dataService.crystalsCollection.doc(this.crystalToEdit.id).collection('attributes').add(attributeRef);
        console.log('Added ' + attributeRef.type + ' to ' + this.crystalToEdit.name + ' subcollection of attributes' ); 
      })
  }
}
