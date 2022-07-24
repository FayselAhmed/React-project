import React, { createContext } from "react";
import { useState } from "react";
export const Usercontext = createContext();

export const Userprovider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Salman", position: "Front End Dev", salary: 25000 },
        { id: 2, name: "Shuvo", position: "Data Scientist", salary: 30000 },
        { id: 3, name: "Ashik", position: "Full Stack Dev", salary: 28000 },
    ]);
    return (
        <Usercontext.Provider value={[users, setUsers]}>
            {props.children}
        </Usercontext.Provider>
    );
};

export default createContext;