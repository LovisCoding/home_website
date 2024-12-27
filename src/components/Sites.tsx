import {Grid2} from "@mui/material";
import Data from "../assets/Data.ts";
import CardSite from "./CardSite.tsx";

export default function Sites() {
    return(
        <Grid2 container columns={{xs: 4, sm:8, md:12}} columnSpacing={3} rowSpacing={3} >
            {Data().map((site, i) => (
                <Grid2  key={i} size={{xs:4, sm:4, md:6}} >
                    <CardSite title={site.title} description={site.description} image={site.img} link={site.link}/>
                </Grid2>
            ))}
        </Grid2>
    )
}