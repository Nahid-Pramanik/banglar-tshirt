import { createContext, useState } from "react";
import Aunty from "../Aunty";
import Father from "../Father";
import Uncle from "../Uncle";
import './GrandPa.css'


export const RingContext = createContext('gold');

export const MoneyContext = createContext(0);

const GrandPa = () => {
    const [money, setMoney] = useState(0);
    return (
        <div >
            <h4>Grand pa page</h4>
            <p>Has Money: {money}</p>
            <div className="flex">
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value="golden ring">
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default GrandPa;