import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ScrollingModule,
        ScrollDispatchModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChakrasComponent } from './components/chakras/chakras.component';
import { ChakraDataComponent } from './components/chakras/chakra-data/chakra-data.component';
import { ElementsComponent } from './components/elements/elements.component';
import { DataService } from './services/data.service';
import { PlanetDetailsComponent } from './components/planets/planet-details/planet-details.component'
import { PlanetsComponent } from './components/planets/planets.component';
import { CrystalsComponent } from './components/crystals/crystals.component';
import { HerbsComponent } from './components/herbs/herbs.component';
import { AstrosComponent } from './components/astros/astros.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { PlanetDataComponent } from './components/planets/planet-data/planet-data.component';
import { ElementDataComponent } from './components/elements/element-data/element-data.component';
import { CrystalDataComponent } from './components/crystals/crystal-data/crystal-data.component';
import { HerbDataComponent } from './components/herbs/herb-data/herb-data.component';
import { AstroDataComponent } from './components/astros/astro-data/astro-data.component';
import { AttributeDataComponent } from './components/attributes/attribute-data/attribute-data.component';
import { DaysComponent } from './components/days/days.component';
import { DaysDataComponent } from './components/days/days-data/days-data.component';
import { PhasesComponent } from './components/phases/phases.component';
import { PhasesDataComponent } from './components/phases/phases-data/phases-data.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EditorComponent } from './components/editor/editor.component';
import { ChakraDetailsComponent } from './components/chakras/chakra-details/chakra-details.component';
import { ImagesService } from './services/images.service';
import { PlatonicSolidsComponent } from './components/platonic-solids/platonic-solids.component';
import { SolidsDataComponent } from './components/platonic-solids/solids-data/solids-data.component';
import { CrystalDetailsComponent } from './components/crystals/crystal-details/crystal-details.component';
import { PhasesDetailsComponent } from './components/phases/phases-details/phases-details.component';
import { ElementDetailsComponent } from './components/elements/element-details/element-details.component';
import { SolidDetailsComponent } from './components/platonic-solids/solid-details/solid-details.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IndexComponent } from './components/index/index.component';
import { HerbDetailsComponent } from './components/herbs/herb-details/herb-details.component';
import { AttributeDetailsComponent } from './components/attributes/attribute-details/attribute-details.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { ReceiptDirective } from './directives/receipt.directive';
import { ImageEditorComponent } from './components/editor/image-editor/image-editor.component';
import { IndexFilterPipe } from './pipes/index-filter.pipe';
import { IndexSortByPipe } from './pipes/index-sort-by.pipe';
import { IndexService } from './services/index.service';
import { IndexDetailsComponent } from './components/index/index-details/index-details.component';
import { ChakraOrderPipe } from './pipes/chakra-order.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImageEditorOrderPipe } from './pipes/image-editor-order.pipe';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ProductListComponent } from './components/shopping/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping/product-list/product-item/product-item.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { CartItemComponent } from './components/shopping/cart/cart-item/cart-item.component';
import { CheckoutComponent } from './components/shopping/checkout/checkout.component';
import { ProductItemDetailsComponent } from './components/shopping/product-list/product-item/product-item-details/product-item-details.component';

import { SquareShopComponent } from './components/square-shop/square-shop.component'




const config = {
  apiKey: 'AIzaSyCkV84KaRHiTF6AFmrZlYXaHKiX15Ht86U',
  authDomain: 'codex-252603.firebaseapp.com',
  databaseURL: 'https://codex-252603.firebaseio.com',
  projectId: 'codex-252603',
  storageBucket: 'gs://codex-252603.appspot.com/',
  messagingSenderId: '789443163112'
};

@NgModule({
  declarations: [
    AppComponent,
    ChakrasComponent,
    ChakraDataComponent,
    ElementsComponent,
    PlanetsComponent,
    CrystalsComponent,
    HerbsComponent,
    AstrosComponent,
    AttributesComponent,
    PlanetDataComponent,
    ElementDataComponent,
    CrystalDataComponent,
    HerbDataComponent,
    AstroDataComponent,
    AttributeDataComponent,
    DaysComponent,
    DaysDataComponent,
    PhasesComponent,
    PhasesDataComponent,
    HomepageComponent,
    EditorComponent,
    ChakraDetailsComponent,
    PlatonicSolidsComponent,
    SolidsDataComponent,
    CrystalDetailsComponent,
    PhasesDetailsComponent,
    ElementDetailsComponent,
    SolidDetailsComponent,
    ToolbarComponent,
    IndexComponent,
    HerbDetailsComponent,
    AttributeDetailsComponent,
    OrderByPipe,
    TypeFilterPipe,
    ReceiptDirective,
    ImageEditorComponent,
    IndexFilterPipe,
    IndexSortByPipe,
    IndexDetailsComponent,
    ChakraOrderPipe,
    NavigationComponent,
    PlanetDetailsComponent,
    UserProfileComponent,
    ImageEditorOrderPipe,
    NavComponent,
    FooterComponent,
    ShoppingComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    ProductItemDetailsComponent,
    SquareShopComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    ScrollingModule ,
    HttpClientModule,
    ScrollDispatchModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService, 
    ImagesService, 
    OrderByPipe,
    TypeFilterPipe,
    IndexService,
    IndexFilterPipe,
    IndexSortByPipe,
    ChakraOrderPipe,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
