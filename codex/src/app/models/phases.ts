import{ Attribute } from "./attributes"
import{ Element } from "./elements"
import { Herb } from './herbs'



export interface Phase {
    id?:string;
    name?:string;
    symbolism?:string;
    usage?:string;
    riseset?:string;
    offerings?:string;
    power?:string;
    mainImage?:string;
    
    element_ref?: Element[];
    herb_ref?: Herb[];
    attribute_ref?: Attribute[];

    
}