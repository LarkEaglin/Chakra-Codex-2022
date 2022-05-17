import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { EditorComponent } from './components/editor/editor.component';
import { ChakrasComponent } from './components/chakras/chakras.component';
import { PhasesComponent } from './components/phases/phases.component';
import { HerbsComponent } from './components/herbs/herbs.component';
import { CrystalsComponent } from './components/crystals/crystals.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ChakraDetailsComponent } from './components/chakras/chakra-details/chakra-details.component';
import { CrystalDetailsComponent } from './components/crystals/crystal-details/crystal-details.component';
import { PhasesDetailsComponent } from './components/phases/phases-details/phases-details.component';
import { ElementDetailsComponent } from './components/elements/element-details/element-details.component';
import { HerbDetailsComponent } from './components/herbs/herb-details/herb-details.component';
import { IndexComponent } from './components/index/index.component';
import { AttributesComponent } from './components/attributes/attributes.component';
import { AttributeDetailsComponent } from './components/attributes/attribute-details/attribute-details.component';
import { ImageEditorComponent } from './components/editor/image-editor/image-editor.component';
import { SolidDetailsComponent } from './components/platonic-solids/solid-details/solid-details.component';
import { PlatonicSolidsComponent } from './components/platonic-solids/platonic-solids.component';
import { IndexDetailsComponent } from './components/index/index-details/index-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailsComponent } from './components/planets/planet-details/planet-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CheckoutComponent } from './components/shopping/checkout/checkout.component';
import { SquareShopComponent } from './components/square-shop/square-shop.component';


const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent, data: { page: 'homepage' }},
  {path: 'login', component: UserProfileComponent, data: { page: 'login' }},
  {path: 'nav', component: NavigationComponent, data: { page: 'nav', animation:'navAnimation' }},
  {path: 'index', component: IndexComponent, data: { page: 'index' }},
  {path: 'index/:id', component: IndexDetailsComponent, data: { page: 'indexDetails' }},

  {path: 'editor', component: EditorComponent, canActivate: [AuthGuard], data: {page : 'editor'}},
  {path: 'image-editor', component: ImageEditorComponent, canActivate: [AuthGuard],  data: {page : 'image-editor'}},

  {path: 'chakras', component: ChakrasComponent, data: {page : 'chakras'}},
  {path: 'chakra/:id', component: ChakraDetailsComponent, data: {page : 'chakraDetails'}},

  {path: 'phases', component: PhasesComponent, data: {page : 'phases'}},
  {path: 'phase/:id', component: PhasesDetailsComponent, data: {page : 'phaseDetails'}},

  {path: 'herbs', component: HerbsComponent, data: {page : 'herbs'}},
  {path: 'herb/:id', component: HerbDetailsComponent, data: {page : 'herbDetails'}},

  {path: 'crystals', component: CrystalsComponent, data: {page : 'crystals'}},
  {path: 'crystal/:id', component: CrystalDetailsComponent, data: {page : 'crystalDetails'}},

  {path: 'elements', component: ElementsComponent, data: {page : 'elements'}},
  {path: 'element/:id', component: ElementDetailsComponent, data: {page : 'elementDetails'}},

  {path: 'attributes', component: AttributesComponent, data: {page : 'attributes'}},
  {path: 'attribute/:id', component: AttributeDetailsComponent, data: {page : 'attributeDetails'}},

  {path: 'planets', component: PlanetsComponent, data: {page : 'planets'}},
  {path: 'planet/:id', component: PlanetDetailsComponent, data: {page : 'planetDetails'}},

  {path: 'solids', component: PlatonicSolidsComponent, data: {page : 'solids'}},
  {path: 'solid/:id', component: SolidDetailsComponent, data: {page : 'solidDetails'}},

  // {path: 'shop', component: ShoppingComponent, data: {page : 'shop'}},
  // {path: 'checkout', component: CheckoutComponent, data: {page : 'checkout'}}

  {path: 'shop', component: SquareShopComponent, data: {page : 'shop'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
