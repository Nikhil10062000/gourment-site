import Card from "react-bootstrap/Card";

import React, { useState } from "react";
import Menus from "./Data";
function KitchenSinkExample({setState , state}) {
  const [data] = useState(Menus);
  const [cgnbtn , setbtn] = useState(true)
  const handleChange=()=>{
    setState(state + 1);
    setbtn(false)
  }
  return (
    <div className="flex flex-row flex-wrap pl-8  ">
      {data.map((item, idx) => {
        return (
          <Card key={idx} className=" w-72 ml-20 h-80 mt-4 border-0 text-base">
            <Card.Img
              variant="top"
              className="h-80"
              src={item.img}
              alt="menuimg"
            />
            <Card.Body className="flex flex-col flex-wrap">
              <Card.Title className="pl-8 hover:text-red-600">{item.title}</Card.Title>
              <Card.Text className=" pl-20 text-xl  text-red-800">$ {item.price}</Card.Text>
              {
                cgnbtn ? (<button className="bg-red-600 h-10 w-52 hover:text-xl text-slate-50" 
                onClick={handleChange}
                >ADD TO CART</button>) : (<button className="bg-lime-600 h-10 w-52 hover:text-xl text-slate-50" 
                onClick={setbtn(true)}
                >VIEW CART</button>)
              }
              
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default KitchenSinkExample;
