import{ Chakra } from "./chakras"
import{ Herb } from "./herbs"
import{ Crystal } from "./crystals"
import{ Planet } from "./planets"
import{ Astro } from "./astros"

export interface Element {
    id?:string;
    name?:string;
    tools?:string;
    symbolism?:string;
    direction?:string;
    polarity?:string;
    qualities?:string; 
    color?:string;
    geometry?:string;
    mainImage?:string;
    

    astro_ref?: Astro[];
    crystal_ref?: Crystal[];
    planet_ref?: Planet[];
    chakra_ref?: Chakra[];
    herb_ref?: Herb[];
}