import React, {useState, useRef} from "react";
import User from "../interface/User";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearchOutline, IoClose } from 'react-icons/io5';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


interface Props {
  setQuery: (string: string) => void;
  setCurrentPage: (number: number) => void;
  setgenderQuery: (string: string) => void;
  data: User[]
}

export const Search = ({setQuery, setCurrentPage, setgenderQuery, data } : Props) => {
 
  return(
    <div className="searchbar">
      <p>Looking for  </p>
      <input type='text' onClick={() => setCurrentPage(1)}
           onChange={(e) => setQuery(e.target.value)}/>
    </div>
    )
    };