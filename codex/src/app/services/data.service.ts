import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument }
    from '@angular/fire/firestore';

import { Chakra } from '../models/chakras';
import { Element } from '../models/elements';
import { Planet } from '../models/planets';
import { FormGroup, FormControl } from '@angular/forms';
import { Astro } from '../models/astros';
import { Crystal } from '../models/crystals';
import { Attribute } from '../models/attributes';
import { Herb } from '../models/herbs';
import { Day } from '../models/days';
import { Phase } from '../models/phases';
import { Solid } from '../models/solids';
import { IndexItem } from '../models';





@Injectable({
  providedIn: 'root'
})
export class DataService {


  chakrasCollection: AngularFirestoreCollection<Chakra>;
  chakraForm = new FormGroup({        
    order: new FormControl(''),
    name: new FormControl(''),
    name_sanskrit: new FormControl(''),
    translated_sanskrit: new FormControl(''),
    body_port: new FormControl(''),
    color: new FormControl(''),
    petals: new FormControl(''),
    earth_port: new FormControl(''),
    earth_port_desc: new FormControl(''),
    frequency: new FormControl(''),
    note: new FormControl(''),
    affirmations: new FormControl(''),
    symbolism: new FormControl(''),
    mainImage: new FormControl('')
    });
  

  herbsCollection: AngularFirestoreCollection<Herb>;
  herbForm = new FormGroup({        
    name: new FormControl(''),
    symbolism: new FormControl(''),
    usage: new FormControl(''),
    history: new FormControl('')
    }); 

  elementsCollection: AngularFirestoreCollection<Element>;
  elementForm = new FormGroup({        
    name: new FormControl(''),
    tools: new FormControl(''),
    symbolism: new FormControl(''),
    direction: new FormControl(''),
    color: new FormControl(''),
    qualities: new FormControl(''),
    geometry: new FormControl(''),
    polarity: new FormControl('')
    });

  planetsCollection: AngularFirestoreCollection<Planet>;
  planetForm = new FormGroup({        
    name: new FormControl(''),
    day: new FormControl(''),
    exaltation: new FormControl(''),
    detriment: new FormControl(''),
    falls: new FormControl(''),
    rules: new FormControl(''),
    metal: new FormControl(''),
    symbolism: new FormControl(''),
    symbolism2: new FormControl(''),
    symbolism3: new FormControl(''),
    associated_dieties: new FormControl(''),
    polarity: new FormControl(''),
    ruling_house: new FormControl(''),
    alt_name: new FormControl(''),
    mainImage: new FormControl(''),
    herb_qualities: new FormControl(''),
    affected_sense: new FormControl(''),
    affirmation: new FormControl(''),
    symbols: new FormControl(''),
    organ: new FormControl(''),
    direction: new FormControl(''),
    retrograde_period: new FormControl(''),
    ritual_focus: new FormControl(''),
    qualities: new FormControl('')
    });

  astrosCollection: AngularFirestoreCollection<Astro>;
  astroForm = new FormGroup({        
    name: new FormControl(''),
    dates: new FormControl(''),
    polarity: new FormControl(''),
    quadrature: new FormControl(''),
    symbol: new FormControl(''),
    withTheMoon: new FormControl(''),
    symbolism: new FormControl('')
    });

  crystalsCollection: AngularFirestoreCollection<Crystal>;
  crystalForm = new FormGroup({        
    name: new FormControl(''),
    alt_name: new FormControl(''),
    symbolism: new FormControl(''),
    crystal_system: new FormControl('')
    });

  solidsCollection: AngularFirestoreCollection<Crystal>;
  solidsForm = new FormGroup({        
    name: new FormControl(''),
    symbolism: new FormControl(''),
    crystal_system: new FormControl(''),
    shape: new FormControl(''),
    });

  attributesCollection: AngularFirestoreCollection<Attribute>;
  attributeForm = new FormGroup({        
    type: new FormControl(''),
    });

  daysCollection: AngularFirestoreCollection<Day>;
  dayForm = new FormGroup({        
    day: new FormControl(''),
    symbolism: new FormControl(''),
    });

  phasesCollection: AngularFirestoreCollection<Phase>;
  phaseForm = new FormGroup({        
    name: new FormControl(''),
    symbolism: new FormControl(''),
    usage: new FormControl(''),
    offerings: new FormControl(''),
    power: new FormControl(''),
    riseset: new FormControl(''),
    });

  indexCollection: AngularFirestoreCollection<Phase>;
  indexForm = new FormGroup({        
    obj_name: new FormControl(''),
    deatil_1: new FormControl(''),
    deatil_2: new FormControl(''),
    deatil_3: new FormControl('')
    });

  constructor(
    public afs: AngularFirestore ){
    this.chakrasCollection = afs.collection<Chakra>('chakras');
    this.herbsCollection = afs.collection<Herb>('herbs');
    this.elementsCollection = afs.collection<Element>('elements');
    this.planetsCollection = afs.collection<Planet>('planets');
    this.astrosCollection = afs.collection<Astro>('astros');
    this.crystalsCollection = afs.collection<Crystal>('crystals');
    this.attributesCollection = afs.collection<Attribute>('attributes');
    this.daysCollection = afs.collection<Day>('days');
    this.phasesCollection = afs.collection<Phase>('phases');
    this.solidsCollection = afs.collection<Solid>('solids');
    this.indexCollection = afs.collection<IndexItem>('index');
    
   }


     
   getChakras(){
    let chakras = this.chakrasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Chakra;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          );
    return chakras;
  }
  getChakra(chakraID): Observable<Chakra>{
    let chakra = this.chakrasCollection.doc<Chakra>(chakraID);
    return chakra.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        return { id, ...data };
      }))
  }
  addChakra(data){
    return this.chakrasCollection.add( data );
  }
  delChakra(chakra) {
    return this.chakrasCollection.doc(chakra.id).delete();
  }

   getHerbs(){
    let herbs = this.herbsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Herb;
          const id = a.payload.doc.id;
          return { id, ...data }; 
            }))
          );
    return herbs;
  }
  getHerb(herbID): Observable<Herb>{
    let herb = this.herbsCollection.doc<Herb>(herbID);
    return herb.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        return { id, ...data };
      }))
  }
  addHerb(data){
    return this.herbsCollection.add( data );
  }
  delHerb(herb) {
    return this.herbsCollection.doc(herb.id).delete();
  }

  getElements(){
    let elements = this.elementsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Element;
          const id = a.payload.doc.id;
          // console.log(a);
          return { id, ...data };
            }))
          )
    return elements;
  }
  getElement(elID): Observable<Element>{
    let element = this.elementsCollection.doc<Element>( elID);
    return element.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log(element)
        return { id, ...data };
      }))
  }
  addElement(data){
    return this.elementsCollection.add( data );
  }
  delElement(element) {
    return this.elementsCollection.doc(element.id).delete();
  }

  getPlanets(){
    let planets = this.planetsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Planet;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return planets;
  }
  getPlanet(planetID): Observable<Planet>{
    let planet = this.planetsCollection.doc<Planet>( planetID );
    return planet.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log(planet)
        return { id, ...data };
      }))
  }
  addPlanet(data){
    return this.planetsCollection.add( data );
  }
  delPlanet(planet) {
    return this.planetsCollection.doc( planet.id ).delete();
  }

  getAstros(){
    let astros = this.astrosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Astro;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return astros;
  }
  getAstro(astroID): Observable<Astro>{
    let astro = this.astrosCollection.doc<Astro>( astroID );
    return astro.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log( astro )
        return { id, ...data };
      }))
  }
  addAstro(data){
    return this.astrosCollection.add( data );
  }
  delAstro(astro) {
    return this.astrosCollection.doc( astro.id ).delete();
  }

  getCrystals(){
    let crystals = this.crystalsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Crystal;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return crystals;
  }
  getCrystal(crystalID): Observable<Crystal>{
    let crystal = this.crystalsCollection.doc<Crystal>( crystalID );
    return crystal.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        // console.log( crystal )
        return { id, ...data };
      }))
  }
  addCrystal(data){
    return this.crystalsCollection.add( data );
  }
  delCrystal(crystal) {
    return this.crystalsCollection.doc( crystal.id ).delete();
  }

  getAttributes(){
    let attributes = this.attributesCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Attribute;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return attributes;
  }
  getAttribute( attributeID ): Observable<Attribute>{
    let attribute = this.attributesCollection.doc<Attribute>( attributeID );
    return attribute.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log( attribute )
        return { id, ...data };
      }))
  }
  addAttribute(data){
    return this.attributesCollection.add( data );
  }
  delAttribute(attribute) {
    return this.attributesCollection.doc( attribute.id ).delete();
  }

  getPhases(){
    let phases = this.phasesCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Phase;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return phases;
  }
  getPhase( phaseID ): Observable<Phase>{
    let phase = this.phasesCollection.doc<Phase>( phaseID );
    return phase.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log( phase )
        return { id, ...data };
      }))
  }
  addPhase(data){
    return this.phasesCollection.add( data );
  }
  delPhase(phase) {
    return this.phasesCollection.doc( phase.id ).delete();
  }

  getDays(){
    let days = this.daysCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Day;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return days;
  }
  getDay( dayID ): Observable<Day>{
    let day = this.daysCollection.doc<Day>( dayID );
    return day.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log( day )
        return { id, ...data };
      }))
  }
  addDay(data){
    return this.daysCollection.add( data );
  }
  delDay(day) {
    return this.daysCollection.doc( day.id ).delete();
  }

  getSolids(){
    let solids = this.solidsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Solid;
          const id = a.payload.doc.id;
          return { id, ...data };
            }))
          )
    return solids;
  }
  getSolid( solidID ): Observable<Solid>{
    let solid = this.solidsCollection.doc<Solid>( solidID );
    return solid.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log( solid )
        return { id, ...data };
      }))
  }
  addSolid(data){
    return this.solidsCollection.add( data );
  }
  delSolid(solid) {
    return this.solidsCollection.doc( solid.id ).delete();
  }


  
}

