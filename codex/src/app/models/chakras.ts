import{ Crystal } from "./crystals"
import{ Element } from "./elements"
import{ Planet } from "./planets"
import{ Astro } from "./astros"
import { Solid } from './solids'

export interface Chakra {
    id?:string;
    order?:string;
    name?: string;
    name_sanskrit?: string;
    translated_sanskrit?: string;
    body_port?:string;
    color?:string;
    petals?: string;
    earth_port?:string;
    earth_port_desc?:string;
    frequency?:string;
    note?:string;
    affirmations?:string;
    symbolism?: string;
    mainImage?: string;

    astro_ref?: Astro[];
    crystal_ref?: Crystal[];
    element_ref?: Element[];
    planet_ref?: Planet[];
    solids_ref?: Solid[];
  }