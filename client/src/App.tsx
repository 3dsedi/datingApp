import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "../src/interface/User";
import Message from "./interface/Message";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { UserCardDetail } from "./components/UserCardDetail";
import { Profile } from "./components/Profile";
import { Chats } from "./components/Chats";
import { ChatScreen } from "./components/ChatScreen";
import { AddUser } from "./components/AddUser";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([])

  const id = uuidv4()
  
  const userAddHandler = async (enteredUser: {
    name: string;
    gender: string;
    age: number;
    img: string;
    dsc: string;
  }) => { 
    const { name, gender, age , img, dsc} = enteredUser;
    console.log(enteredUser)
    const reqBody = { name, gender, age  , dsc, img, id};
    console.log(reqBody)
    try {
      const response = await fetch("http://localhost:8000/api/users", {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      
      });
      console.log(response)
    
      if (response.status === 201) {
        console.log(enteredUser + 'user')
        const result = await response.json();
        console.log(result + 'result')
        setData(result.Users);
      }
    } catch (error) {
      console.error(error);
    }


//     const response = await fetch("http://localhost:8000/api/users", {
//       mode: 'no-cors',
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify(reqBody),
      
//     });

//     if (response.status === 201) {
//       console.log(enteredUser+'user')
//       const result = await response.json();
//       console.log(result+'result')
//       setData(result.Users);
      
//     }
      
 };
   
//  const userAddHandler = ()=> {
//   console.log('added')
//  }
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/users");
    const resualt = await response.json();
    const data = resualt.Users;
    console.log(data)
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchMessages = async () => {
    const response = await fetch("http://localhost:8000/api/messages");
    const resualt = await response.json();
    const messages = resualt.messages;
    setMessages(messages);
  };
  useEffect(() => {
    fetchMessages();
  }, []);


  return (
    <div>
      <Header />
      <Profile />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
            />
          }
        ></Route>
        <Route path="/chat" element={<Chats
        messages={messages}
        data={data}
        />}></Route>
        <Route path="/profile"></Route>
        <Route path="/signup" element={<AddUser addUser={userAddHandler}/>}></Route>
        <Route path={`chat/:chatid`} element={<ChatScreen
        messages={messages}
        />}></Route>
        <Route
          path={`/:userid`}
          element={<UserCardDetail data={data} setData={setData} />}
        />
      </Routes>
 {/* <footer/> */}
    </div>
  );
}

export default App;
