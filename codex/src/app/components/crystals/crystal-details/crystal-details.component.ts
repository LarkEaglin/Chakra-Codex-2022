import { Component, OnInit } from '@angular/core';
import { Crystal } from '../../../models/crystals';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Chakra } from 'src/app/models/chakras';
import { Astro } from 'src/app/models/astros';
import { Planet } from 'src/app/models/planets';
import { Herb } from 'src/app/models/herbs';
import { Element } from 'src/app/models/elements';
import { ReceiptDirective } from '../../../directives/receipt.directive'
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/images';

@Component({
  selector: 'app-crystal-details',
  templateUrl: './crystal-details.component.html',
  styleUrls: ['./crystal-details.component.scss']
})
export class CrystalDetailsComponent implements OnInit {

  crystal: Crystal;
  crystals: Crystal[];
  id: string;
  private sub: any;
  

  mainImage: Observable<string>;
  // images: Observable<Image[]>;

  chakras: Chakra[];
  astros: Astro[];
  planets: Planet[];
  herbs: Herb[];
  elements: Element[];

  images: Image[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });

    this.currentCrystal();
    this.subcollections();
  }

  currentCrystal(){
    let crystal = this.dataService.crystalsCollection.doc<Crystal>(this.id)
    this.dataService.getCrystal(this.id).subscribe(
      crystalRef => {
        this.crystal = crystalRef;
        console.log(this.crystal);
      })
  }

  subcollections(){
        // images
        this.dataService.crystalsCollection.doc(this.id).collection('images').valueChanges().subscribe(
          val => {
            this.images = val;
            console.log(this.images); }
          )
    // chakras
    this.dataService.crystalsCollection.doc(this.id).collection('chakras').valueChanges().subscribe(
      val => {
        this.chakras = val;
        console.log(this.chakras); }
      )
    // astro
    this.dataService.crystalsCollection.doc(this.id).collection('astros').valueChanges().subscribe(
      val => {
        this.astros = val; }
      )
    // herbs
    this.dataService.crystalsCollection.doc(this.id).collection('herbs').valueChanges().subscribe(
      val => {
        this.herbs = val; }
      )
      // elements
    this.dataService.crystalsCollection.doc(this.id).collection('elements').valueChanges().subscribe(
      val => {
        this.elements = val; 
      console.log(this.elements) }
      )

  }


}
