import { memo } from "react";

import React from 'react'

export const GenarateRamdmNumber = memo(({randomNumber, generateRandomNumber}) => {
    console.log('GenarateRamdmNumber')

    return(
        <> 
        <h2>RandomNumber:{randomNumber}</h2>
        <button onClick={generateRandomNumber}>GenarateRamdmNumber</button> 
        </> 
        )


    }
)