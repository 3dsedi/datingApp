import React from 'react'
import { Chat } from './Chat'
import User from '../interface/User'
import Message from '../interface/Message'
import PersonalMs from '../interface/PersonalMs'

interface Props {
  data:User[],
  messages: Message[]

}

export const Chats = ({data,messages }: Props) => {
  const perssonMessage = messages.map(m => m.message)
  return (
    <div className='chats'>
       {perssonMessage.map((message, index) => 
       <Chat 
       key={index}
       message={message}
       data={data}/>
       )}
     
      </div>
    )
  }