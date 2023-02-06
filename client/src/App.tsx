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

function App() {
  const [data, setData] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([])
  
  const userAddHandler = async (enteredUser: {
    name: string;
    gender: string;
    age: number;
    img: string;
    dsc: string;
  }) => {
    const { name, gender, age , img, dsc} = enteredUser;
    const reqBody = { name, gender, age  , dsc, img, id: Date.now().toString()};
    const response = await fetch("http://localhost:8000/api/users", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(reqBody),
      
    });

    if (response.status === 201) {
      console.log(enteredUser)
      const result = await response.json();
      console.log(result)
      setData(result.Users);
    }
      
  };
   
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/users");
    const resualt = await response.json();
    const data = resualt.Users;
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
