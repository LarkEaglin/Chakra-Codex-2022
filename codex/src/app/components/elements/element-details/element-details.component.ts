import { Component, OnInit } from '@angular/core';
import { Element } from '../../../models/elements';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Chakra } from 'src/app/models/chakras';
import { Crystal } from 'src/app/models/crystals';
import { Astro } from 'src/app/models/astros';
import { Planet } from 'src/app/models/planets';
import { Herb } from 'src/app/models/herbs';
import { map } from 'rxjs/operators';
import { Image } from 'src/app/models/images';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.scss']
})
export class ElementDetailsComponent implements OnInit {
  element: Element;
  elements: Element[];
  id: string;
  private sub: any;

  images: Image[];

  chakras: Chakra[];
  crystals: Crystal[];
  astros: Astro[];
  planets: Planet[];
  herbs: Herb[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private imgService: ImagesService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });

    this.currentElement();
    this.subcollections();
    
    // console.log('popppppppp');
  }

  currentElement(){
    // let element = this.dataService.elementsCollection.doc<Element>(this.id)
    this.dataService.getElement(this.id).subscribe(
      elementRef => {
        this.element = elementRef;
        console.log(this.element);
      })
  }
 
  subcollections(){
    // images
    this.dataService.elementsCollection.doc(this.id).collection('images').valueChanges().subscribe(
      val => {
        this.images = val;
        console.log(this.images); }
      )
    // chakras
    this.dataService.elementsCollection.doc(this.id).collection('chakras').valueChanges().subscribe(
      val => {
        this.chakras = val;
        console.log(this.chakras); }
      )
    // crystals
    this.dataService.elementsCollection.doc(this.id).collection('crystals').valueChanges().subscribe(
      val => {
        this.crystals = val; }
      )
    // astro
    this.dataService.elementsCollection.doc(this.id).collection('astros').valueChanges().subscribe(
      val => {
        this.astros = val; }
      )
    // herbs
    this.dataService.elementsCollection.doc(this.id).collection('herbs').valueChanges().subscribe(
      val => {
        this.herbs = val; }
      )

  }




}

