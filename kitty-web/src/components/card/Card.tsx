import React from "react";
import { Link } from "react-router-dom";
import { Kitty } from "../../types/kitty";
import "./index.css";


interface props {
    kitty?: Kitty;
}

const Card: React.FC<props> = ({ kitty }) => {
    return (
        <Link className="card-link" to={`/${kitty?.id}`} >
            <section className={'card'}>
                {!kitty ? (
                    <p>No kitty!</p>
                ) : (
                    <>
                        <img className="card-image" src={kitty.imageFileName} />
                        <div className="card-info">
                            <p className="card-name">{kitty.name}</p>
                            <span className="card-age">{kitty.age}</span>
                        </div>
                        <span className="card-gender">
                            <img src={`/${kitty.gender}-cat.png`} />
                        </span>
                    </>
                )}
            </section>
        </Link>
    );
};

export default Card;
