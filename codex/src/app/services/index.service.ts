import { Injectable, } from '@angular/core';

import { IndexItem } from '../models/index'
import { DataService } from './data.service';
import { Herb } from '../models/herbs';
import { Crystal } from '../models/crystals';
import { Element } from '../models/elements';
import { Chakra } from '../models/chakras';
import { Planet } from '../models/planets';
import { Solid } from '../models/solids';
import { Attribute } from '../models/attributes';
import { Day } from '../models/days';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ImagesService } from './images.service';
import { Image } from '../models/images';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  index_item: IndexItem;
  index: IndexItem[] = [];

  chakraImg: Image;
  chakraImages: Image[] = [];
  
  

  constructor ( private dataService: DataService,
                private imgService: ImagesService
     ) {
    
   }


   retrieveItems(){
    //  clear the index of any previous iteration and have it repopulated every time this function is called by a component
     this.index = [];
     this.chakraImages = [];

     this.imgService.getImages().subscribe( images =>{
      for (let img in images){
        if (images[img].category = 'chakras'){
         this.chakraImg = images[img];
         this.chakraImages.push(this.chakraImg);
        }
      }
    }
    );
     
    //  chakras 
   this.dataService.getChakras().subscribe(chakras => {
      for (let obj in chakras){
        
        this.index_item = chakras[obj];
        this.index_item.id = chakras[obj].id;
        this.index_item.obj_name = chakras[obj].name;
        this.index_item.category = 'chakra'
        this.index_item.detail_1 = chakras[obj].body_port;
        this.index_item.detail_2 = chakras[obj].affirmations;

        this.index.push(this.index_item);
      }
    });
    console.log(this.index)
    // phases 
    this.dataService.getPhases().subscribe(phases => {
      for (let obj in phases){
        
        this.index_item = phases[obj];
        this.index_item.id = phases[obj].id;
        this.index_item.obj_name = phases[obj].name;
        this.index_item.category = 'phase'
        this.index_item.detail_1 = phases[obj].power;
        this.index_item.detail_2 = phases[obj].offerings;

        this.index.push(this.index_item);
      }      
    });
    

   }

}
