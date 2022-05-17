import{ Planet } from "./planets"



export interface Day {
    id?:string;
    day?:string;
    symbolism?:string;
    mainImage?:string;
    

    planet_ref?: Planet[];
}