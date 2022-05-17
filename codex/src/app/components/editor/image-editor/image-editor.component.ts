import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { FormControl, FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Image } from 'src/app/models/images';
import { DataService } from 'src/app/services/data.service';
import { Chakra } from 'src/app/models/chakras';
import { Crystal } from 'src/app/models/crystals';
import { Astro } from 'src/app/models/astros';
import { Planet } from 'src/app/models/planets';
import { Herb } from 'src/app/models/herbs';
import { Element } from 'src/app/models/elements';
import { Solid } from 'src/app/models/solids';
import { Attribute } from 'src/app/models/attributes';
import { Phase } from 'src/app/models/phases';

import {map, take, debounceTime} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})


export class ImageEditorComponent implements OnInit {

  // sortBy:string;

  // imageForm: FormGroup;
  imageForm = new FormGroup({
    imgName: new FormControl('' , [
      Validators.required,
      CustomValidator.imgName(this.afs) ]) ,
      // next use this data to provide the user with feedback about the validations in progress
  
      caption: new FormControl(''),
      category: new FormControl(''),
      imgUrl: new FormControl(''),
      shoppingLink: new FormControl(''),
    });
  

  imgSrc: string; 
  selectedImg: any = null;
  isSubmitted: boolean;

  chakras: Chakra[];
  elements: Element[];
  crystals: Crystal[];
  astros: Astro[];
  planets: Planet[];
  herbs: Herb[];

  img: Image;
  imgToEdit: Image;
  images: Image[];

  constructor(
    public imgService: ImagesService,
    public dataService: DataService,
    private storage: AngularFireStorage,
    private afs:AngularFirestore,
    private fb: FormBuilder

    ) { }

  ngOnInit() {
    this.resetForm();
    this.references();

    // this.imageForm = this.fb.group({

    //   imgName: new FormControl('' , [
    //   Validators.required,
    //   CustomValidator.imgName(this.afs) ]) ,
    //   // next use this data to provide the user with feedback about the validations in progress
  
    //   caption: new FormControl(''),
    //   category: new FormControl(''),
    //   imgUrl: new FormControl(''),
    //   shoppingLink: new FormControl(''),
    // });
   
  }


  references(){
    this.imgService.getImages().subscribe(images => {
      this.images=images;
      console.log(this.images);
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
    this.dataService.getCrystals().subscribe(crystals => {
      this.crystals = crystals;
    });
    this.dataService.getHerbs().subscribe(herbs => {
      this.herbs = herbs;
    });
  }

  showPreview(event:any){
    if( event.target.files && event.target.files[0] ){
      const reader = new FileReader();
      reader.onload = (imgVariable:any) => this.imgSrc = imgVariable.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    } else{
      this.imgSrc = '/assets/logo_white.png';
      this.selectedImg = null;
    }
    console.log(this.selectedImg);
  }

  onSubmit(imgFormValue){
    this.isSubmitted = true;
    
    var filePath = `images/${imgFormValue.category}/${imgFormValue.imgName}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
      finalize( ()=> {
        fileRef.getDownloadURL().subscribe( (url) => {
          imgFormValue['imgUrl'] = url;
          this.imgService.insertImageDetails(imgFormValue);
          this.resetForm();

        })
      })
    ).subscribe();
}

  resetForm(){
    this.imageForm.reset();
    this.imageForm.setValue({
      imgName: '',
      caption: '',
      category: 'Index',
      imgUrl: '',
      shoppingLink: ''
    });
    this.imgSrc = '/assets/logo_white.png';
    this.isSubmitted = false;
    this.selectedImg = null;
  }

  delImg(imageToDelete: Image) {

    let doc = this.imgService.imgCollection.doc(imageToDelete.id);
    doc.delete();
    var filePath = `images/${imageToDelete.category}/${imageToDelete.imgName}`;

    var storedImg = this.storage.ref(filePath);
    console.log(storedImg)
    storedImg.delete();
    
    // return this.imgCollection.doc(img.id).delete();
  }


  chooseImg(aImage: Image){
    this.imgService.getImage(aImage.id).subscribe(
      imgRef => {
        this.imgToEdit = imgRef;
        console.log(this.imgToEdit)
      })
  }

  pushEl(element: Element){
    this.dataService.getElement(element.id).subscribe(
      elRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'elementID': element.id
        });
        this.dataService.elementsCollection.doc(element.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + elRef.name  + ' subcollection of images' ); 
      })
  }
  pushChakra(chakra: Chakra){
    this.dataService.getChakra(chakra.id).subscribe(
      chakraRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'chakraID': chakra.id
        });
        this.dataService.chakrasCollection.doc(chakra.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + chakraRef.name  + ' subcollection of images' ); 
      })
  }
  pushCrystal(crystal: Crystal){
    this.dataService.getCrystal(crystal.id).subscribe(
      crystalRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'crystalID': crystal.id
        });
        this.dataService.crystalsCollection.doc(crystal.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + crystalRef.name  + ' subcollection of images' ); 
      })
  }
  pushAstro(astro: Astro){
    this.dataService.getAstro(astro.id).subscribe(
      astroRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'astroID': astro.id
        });
        this.dataService.astrosCollection.doc(astro.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + astroRef.name + ' subcollection of images' ); 
      })
  }
  pushPlanet(planet: Planet){
    this.dataService.getPlanet(planet.id).subscribe(
      planetRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'planetID': planet.id
        });
        this.dataService.planetsCollection.doc(planet.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + planetRef.name + ' subcollection of images' ); 
      })
  }
  pushSolid(solid: Solid){
    this.dataService.getSolid(solid.id).subscribe(
      solidRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'solidID': solid.id
        });
        this.dataService.solidsCollection.doc(solid.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + solidRef.name + ' subcollection of images' ); 
      })
  }
  pushAttribute(attribute: Attribute){
    this.dataService.getAttribute(attribute.id).subscribe(
      attributeRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'attributeID': attribute.id
        });
        this.dataService.attributesCollection.doc(attribute.id).collection('attributes').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + attributeRef.type + ' subcollection of images' ); 
      })
  }
  pushHerb(herb: Herb){
    this.dataService.getHerb(herb.id).subscribe(
      herbRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'herbID': herb.id
        });
        this.dataService.herbsCollection.doc(herb.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + herbRef.name + ' subcollection of images' ); 
      })
  }
  pushPhase(phase: Phase){
    this.dataService.getPhase(phase.id).subscribe(
      phaseRef => {
        let doc = this.imgService.imgCollection.doc(this.imgToEdit.id);
        doc.update({
          'phaseID': phase.id
        });
        this.dataService.phasesCollection.doc(phase.id).collection('images').add(this.imgToEdit);
        console.log('Added ' + this.imgToEdit.imgName + ' to ' + phaseRef.name + ' subcollection of images' ); 
      })
  }

  get ImgName(){
    return this.imageForm.get('imgName')
  }


}

// create a custom class > wrap the validator in a method that takes afs as an argument instead of trying to bind it in Angular some other way
export class CustomValidator{

  // static method called imgName that takes afs as its argument
  static imgName(afs:AngularFirestore){

    // then return a function that adheres to the Angulr Validator interface
    return (control: AbstractControl) => {

      // this function takes the FormControlimgName as the argument and retrieves the value from the form by calling control.value on the argument
      const imgName = control.value ;

      // make the validator asynchronous by returning an observable that we get from afs by calling afs.collection of images bla bla bla where the imgName is equal to the imgName being typed into the form (the const variable declared above) 
      return afs.collection('images', ref => ref.where('images', "==", "imgName" ) )

      // that gave us a reference and allows us to call valueChanges to get the observable
      .valueChanges().pipe(
        // debounce delays the query till 500ms after the user finishes typing instead of with every key stroke
        debounceTime(500),
        take(1),
        // here we check in the array that afs sends us back if the name has already been taken
        map(arr => arr.length ? {imgNameAvailable: false} : null),
      )
    }
  }
}

// proceed to form group and add CustomValidator to the validators array