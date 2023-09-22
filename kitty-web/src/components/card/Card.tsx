import React from "react";
import { Kitty } from "../../types/kitty";
import "./index.css";

interface props {
  kitty?: Kitty;
}

const card: React.FC<props> = (kitty) => {
  return (
    <section className={'card'}>
      {kitty ? (
        <p>No kitty!</p>
      ) : (
        <>
          <img src={`/images`}/>
        </>
      )}
    </section>
  );
};

export default card;
