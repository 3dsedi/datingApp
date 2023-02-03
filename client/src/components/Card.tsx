import React from "react";
import { useNavigate } from "react-router-dom";
import User from "../interface/User";
import "../styles/Card.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import { Avatar } from '@mui/material'

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
        <Avatar src={user.img}  sx={{ width: 250, height: 250 }} />
      </div>
      <div className="productCard_desc">
        <h6 className="card-title">{user.name}</h6>
          <p  className="p__amount">{user.age} y/o</p>
      </div>
      <IconButton>
          <StarRateIcon className="cardicon"/>
      </IconButton>
      <IconButton>
          <FavoriteIcon className="cardicon"/>
      </IconButton>

    </article>
  );
};
