import React from "react";
import { useNavigate } from "react-router-dom";
import User from "../interface/User";
import "../styles/Card.css";

interface Props {
  user: User;
}

export const Card = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <article
    className="productCard"
      onClick={() => {
        navigate(`/${user.id}`);
      }}
    >
      <div className="card-article-img">
        <img  style={{
              width: "100%",
              margin: 0,
            }}
            src={user.img} alt="img" />
      </div>
      <div className="productCard_desc">
        <h6 className="card-title">{user.name}</h6>
          <p className="p__type">{user.gender}</p>
          <p  className="p__amount">{user.age} years old</p>
      </div>
    </article>
  );
};
