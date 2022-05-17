import{ Chakra } from "./chakras"
import{ Crystal } from "./crystals"
import{ Element } from "./elements"


export interface Solid {
    id?:string;
    name?:string;
    symbolism?:string;
    shape?:string;
    mainImage?:string;

    crystal_ref?: Crystal[];
    element_ref?: Element[];
    chakra_ref?: Chakra[];
}