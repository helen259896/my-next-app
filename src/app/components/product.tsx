import React from "react";
import Slider from "react-slick";



export default async function Product() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div>
      Product page
    </div>
  )
}
