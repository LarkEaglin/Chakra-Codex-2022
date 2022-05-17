import{ Chakra } from "./chakras"
import{ Herb } from "./herbs"
import{ Crystal } from "./crystals"
import{ Element } from "./elements"
import{ Astro } from "./astros"
import { Day } from './days'
import { Solid } from './solids'

export interface Planet {
    id?:string;
    name?:string;
    alt_name?:string;
    day?:string;
    exaltation?:string;
    detriment?:string;
    falls?:string;
    rules?:string;
    metal?:string;
    symbolism?:string;
    symbolism2?:string;
    symbolism3?:string;
    associated_dieties?:string;
    polarity?:string;
    mainImage?:string;
    herb_qualities?:string;
    ritual_focus?:string;
    affected_sense?:string;
    affirmation?:string;
    symbols?:string;
    organ?:string;
    direction?:string;
    retrograde_period?:string;
    qualities?:string;
    ruling_house?:string;


    crystal_ref?: Crystal[];
    element_ref?: Element[];
    chakra_ref?: Chakra[];
    herb_ref?: Herb[];
    platonic_solid?: Solid[];
}