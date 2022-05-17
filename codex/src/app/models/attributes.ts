import{ Herb } from "./herbs"
import{ Crystal } from "./crystals"
import { Phase } from './phases'


export interface Attribute {
    id?:string;
    type?:string; 

    herb_ref?: Herb[];
    crystal_ref?: Crystal[];
    phase_ref?: Phase[];
    
}