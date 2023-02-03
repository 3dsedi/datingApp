import React from 'react'
import '../styles/Chat.css'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonalMs from '../interface/PersonalMs'
import User from '../interface/User'

interface Props {
  data:User[]
  message:PersonalMs[]

}

export const Chat = ({data,message }: Props) => {
  return (
    
    <Link to={`chat/${message[0].name}`}>
    <div className='chat'>
        <Avatar className='chat__img' src={message[0].img}/>
        <div className='chat__detail'>
        <h2>{message[0].name}</h2>
        <p>{message[message.length-1].message}</p>
        </div>
        <p className='chat__timestamp'>15 min ago</p>

    </div>
    </Link>
  )
}
