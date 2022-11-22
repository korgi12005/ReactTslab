import React, { FC, useEffect, useState } from "react";
//import { VehicleFilter } from "../data/vehicles/contracts";
import {VehicleApi} from "../data/vehicles/api"
//import {VehicleTypeSelect} from "./VehicleTypeSelect"
import { Vehicle, VehicleFilter, vehicleTypes,vehicleTypeTitles } from "../data/vehicles/contracts";
/*
interface vechType{
    veType:VehicleType | null;
}


*/
interface IsetVi{
    setVi: React.Dispatch<React.SetStateAction<Vehicle[]>>
}
export const Filter:FC<IsetVi> = ( { setVi } ) => {

    const [sType,setType]=useState(-1);
    const [sInput,setIntput]=useState('');

    useEffect((()=>{
        const initialFilter: VehicleFilter = {
            title: sInput,
            type: vehicleTypes[sType]
        };

       const res= VehicleApi.search(initialFilter);
      //console.log(res);
       //console.log(initialFilter);
       setVi(res);
    }),[sType,sInput])
   

        return <div>
            <input onChange={(e)=>setIntput(e.target.value)} value={sInput}/>
            <select onChange={(e)=>setType(+e.target.value)}>
                <option value={-1}>Все</option>
                {vehicleTypes.map((el)=>{
                    return <option key={el+1} value={el}>{vehicleTypeTitles[el]}</option>
            })}</select>
            

        </div>;
    
}
