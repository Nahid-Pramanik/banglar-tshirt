import { useContext } from "react";
import { MoneyContext } from "./GrandPa/GrandPa";


const Crush = () => {
    const money = useContext(MoneyContext)
    return (
        <div>
            <h4>Crush page</h4>
            <p>{money}</p>
        </div>
    );
};

export default Crush;