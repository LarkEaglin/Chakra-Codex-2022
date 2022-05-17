import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Chakra } from '../../../models/chakras';
import { Element } from '../../../models/elements';
import { Crystal } from '../../../models/crystals';
import { Astro } from '../../../models/astros';
import { Planet } from '../../../models/planets';
import { Herb } from '../../../models/herbs';
import { Image } from '../../../models/images';

// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-chakra-details',
  templateUrl: './chakra-details.component.html',
  styleUrls: ['./chakra-details.component.scss']
})
export class ChakraDetailsComponent implements OnInit {

  chakra: Chakra;
  chakras: Chakra[];
  id: string;
  private sub: any;

  mainImage: Observable<string>;

  elements: Element[];
  crystals: Crystal[];
  astros: Astro[];
  planets: Planet[]; 
  herbs: Herb[];

  
  images: Image[];
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });

    this.currentChakra();
    this.subcollections();
    
    
  }

  currentChakra(){
    this.dataService.getChakra(this.id).subscribe(
      chakraRef => {
        this.chakra = chakraRef;
        console.log(this.chakra);
      })
  }

  getImages(){


  }

  subcollections(){
    // images
    this.dataService.chakrasCollection.doc(this.id).collection('images').valueChanges().subscribe(
      val => {
        this.images = val;
        console.log(this.images); }
      )

// astro
this.dataService.chakrasCollection.doc(this.id).collection('astros').valueChanges().subscribe(
  val => {
    this.astros = val; }
  )
// herbs
this.dataService.chakrasCollection.doc(this.id).collection('herbs').valueChanges().subscribe(
  val => {
    this.herbs = val; }
  )
  // elements
this.dataService.chakrasCollection.doc(this.id).collection('elements').valueChanges().subscribe(
  val => {
    this.elements = val; 
  console.log(this.elements) }
  )
  // crystals
this.dataService.chakrasCollection.doc(this.id).collection('crystals').valueChanges().subscribe(
  val => {
    this.crystals = val; 
  console.log(this.crystals) }
  )

}

}
