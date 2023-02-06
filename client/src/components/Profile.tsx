import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import "../styles/Profile.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';

export const Profile = () => {
  return (
    <div className="header__profile">
        <Link to='/profile'>
      <IconButton>
        <AccountCircleIcon className="header__icon" sx={{ fontSize: 40 }} />
      </IconButton>
        </Link>

      <Link to='/signup'>
      <IconButton>
        <PersonAddAltSharpIcon className="header__icon" sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>

        
      <Link to='/chat' >
      <IconButton>
        <ForumIcon className="header__icon" sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>
    </div>
  );
};
