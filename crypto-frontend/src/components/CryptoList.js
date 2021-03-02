import React from "react";
import Card from "./Card";

export default function CryptoList({...crypto}) {
  console.log(crypto)
  const displayCryptoList = () => {
    // crypto.map((crypto) => {
    //   <Card key={crypto.nameid} name={crypto.name} price={crypto.price_usd} />;
    // });
  };

  return <ul>{}</ul>;
}
