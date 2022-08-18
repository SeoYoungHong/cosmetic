import { useEffect, useState } from "react";
import React from "react";


function Contentpage(props){

    
    if(props.id===props.idx){
        return (
            <div>
                {props.arr[props.keys]?.map((i,j)=>(
                    <div key={j}>
                        {i['title']}
                    </div>
            ))}
            </div>
        )
    }
}
export default Contentpage