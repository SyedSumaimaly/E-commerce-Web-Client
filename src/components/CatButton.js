'use client';

import { Button } from 'flowbite-react';
import React from 'react'

function CatButton() {
  return (
    <div>
      


    <div className="">
   
     
      <Button.Group outline>
        <Button gradientDuoTone="cyanToBlue">Men</Button>
        <Button gradientDuoTone="cyanToBlue">Women</Button>
        <Button gradientDuoTone="cyanToBlue">Kids</Button>
      </Button.Group>
      
    </div>

      
    </div>
  );
}

export default CatButton