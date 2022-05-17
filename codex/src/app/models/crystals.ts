import{ Chakra } from "./chakras"
import{ Herb } from "./herbs"
import{ Element } from "./elements"
import{ Planet } from "./planets"
import{ Astro } from "./astros"
import { Attribute } from './attributes'

export interface Crystal {
    id?:string;
    name?:string;
    alt_name?:string;
    symbolism?:string;
    crystal_system?:string;
    mainImage?:string;


    astro_ref?: Astro[];
    element_ref?: Element[];
    planet_ref?: Planet[];
    attribute_ref?: Attribute[];
    chakra_ref?: Chakra[];
    herb_ref?: Herb[];
    solid_ref?: Herb[];
}