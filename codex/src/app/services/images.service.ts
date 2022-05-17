import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Image } from '../models/images';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imgCollection: AngularFirestoreCollection<Image>;

  tempImg : Image;
  images : Image[] = [];
  


  constructor( private afs: AngularFirestore,
              private storage: AngularFireStorage ) { 
    this.imgCollection = afs.collection<Image>('images');
   }

   pushImages(){
     this.getImages().subscribe(
      images => {
        for (let img in images){
          this.tempImg = images[img];
          this.images.push(this.tempImg); }
      })
   }

   getImages(){
    let images = this.imgCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Image;
        const id = a.payload.doc.id;
        return { id, ...data };
          }))
        );
  return images;
   }

  
  

  insertImageDetails(imgDetails){
    this.imgCollection.add(imgDetails);

  }
    

  getImage(imgID): Observable<Image>{
    let img = this.imgCollection.doc<Image>(imgID);
    return img.snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        return { id, ...data };
        
      }))
      
  }









   }

