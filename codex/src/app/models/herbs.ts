import{ Chakra } from "./chakras"
import{ Crystal } from "./crystals"
import{ Planet } from "./planets"
import{ Astro } from "./astros"
import{ Attribute } from "./attributes"

export interface Herb {
    id?:string;
    name?:string;
    symbolism?:string;
    usage?:string;
    history?:string;
    mainImage?:string;


    astro_ref?: Astro[];
    element_ref?: Element[];
    planet_ref?: Planet[];
    attribute_ref?: Attribute[];
    chakra_ref?: Chakra[];
}