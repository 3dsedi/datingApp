import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "../src/interface/User";
import Message from "./interface/Message";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { UserCardDetail } from "./components/UserCardDetail";
import { Profile } from "./components/Profile";
// import State from '../src/interface/State'
import db from './components/Firebase'
import { Chats } from "./components/Chats";
import { ChatScreen } from "./components/ChatScreen";

function App() {
  const [data, setData] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([])
  const [genderQuery, setgenderQuery] = useState<string>("");


  const search = (data: User[]) => {
    return data.filter((person: User) =>
      person.gender.toLowerCase().includes(query.toLowerCase())
    );
  };
  const genderSearch = (data: User[]) => {
    const gender = data.filter((person: User) => person.gender === genderQuery);
    console.log();
    return gender;
  };

  // const genderTypes = (data:User[]) => {
  //   const allGender = data.map(person => person.gender);
  //   const gender = allGender.filter((gender, index) => {
  //     return allGender.indexOf(gender) === index;
  //   });
  //   return gender;
  // }

  // const FilterHandler = (data: User[]) => {
  //   const result = data.filter((person: User) => person.gender === query)
  //   return result
  //   }

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/users");
    const resualt = await response.json();
    const data = resualt.Users;
    setData(data);
  };
  const fetchMessages = async () => {
    const response = await fetch("http://localhost:8000/api/messages");
    const resualt = await response.json();
    const messages = resualt.messages;
    setMessages(messages);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

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
              setQuery={setQuery}
              setgenderQuery={setgenderQuery}
              results={search(data)}
              genderresults={genderSearch(data)}
              data={data}
            />
          }
        ></Route>
        <Route path={`chat/:chatid`} element={<ChatScreen
        messages={messages}
        />}></Route>
        <Route path="/chat" element={<Chats
        messages={messages}
        data={data}
        />}></Route>
        <Route path="/profile"></Route>
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
