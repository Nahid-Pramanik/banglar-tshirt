import { useContext } from "react";
import { MoneyContext } from "./GrandPa/GrandPa";


const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>uncle page</h4>
            <p>Money: {money}</p>
            <button onClick={ ()=> setMoney(money + 100)}>send 100</button>
        </div>
    );
};

export default Uncle;