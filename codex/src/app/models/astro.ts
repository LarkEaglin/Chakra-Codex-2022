import{ Chakra } from "./chakras"
import{ Herb } from "./herbs"
import{ Crystal } from "./crystals"
import{ Planet } from "./planets"
import{ Element } from "./elements"

export interface Astro {
    id?: string;
    name?: string;
    dates?: string;
    polarity?: string;
    symbol?: string;
    symbolism?: string;
    quadrature?: string;
    withTheMoon?: string;



    element_ref?: Element[];
    astro_ref?: Astro[];
    crystal_ref?: Crystal[];
    chakra_ref?: Chakra[];
    herb_ref?: Herb[];
    planet_ref?: Planet[];

}
