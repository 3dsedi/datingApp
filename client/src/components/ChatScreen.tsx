import React, { useState, useLayoutEffect } from "react";
import { useParams, useNavigate, parsePath } from "react-router-dom";
import "../styles/ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import Message from "../interface/Message";

interface Props {
  messages: Message[];
}
export const ChatScreen = ({ messages }: Props) => {

  const param = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
 
  const abc =  messages.map(m => m.message)
  // const personalMessage = abc.filter(user=> user. === param.chatid)
  // console.log(personalMessage)
  console.log(messages)
  return (
    <></>
//   <div className="chatScreen">
//    {messages.filter(user => user.chatid === param.chatid).map((m, index) => {
// return(
//   <div key={index}> 
//   {m.message[0].message}
//   </div>
// )
//    })}
//       </div>

  )
};

//         {messages.filter(user => user.chatid === param.chatid).map((message, index) => {
//          return ( <div key={index}>
//  {message.message.map(message => message.message)}
//          </div>))}

//     <div>
//   <p className='chatScreen__timestamp'>you matched with sam on 20/08/2022</p>
//       {message !== 'Sareh' ? (
//           <div className='chatScreen__message'>
//               <Avatar className='chatScreen__img' src={message.img}/>
//               <p className='chatScreen__text'>{message.message}</p>
//               </div>) : (
//                   <div className='chatScreen__message'>
//                   <Avatar className='chatScreen__img' src={message.img}/>
//                   <p className='chatScreen__textuser'>{message.message}</p>
//                   </div>
//               )
//       ))}
//       </div>
//  )}
