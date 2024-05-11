import { useContext } from "react";
import { RingContext } from "./GrandPa/GrandPa";
import Crush from "./Crush";


const MySelf = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>My self page</h4>
            <p>{ring}</p>
            <Crush></Crush>
        </div>
    );
};

export default MySelf;