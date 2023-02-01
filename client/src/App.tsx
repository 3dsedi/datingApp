import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "../src/interface/User";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { UserCardDetail } from "./components/UserCardDetail";
// import State from '../src/interface/State'

function App() {
  const [data, setData] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");
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
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {/* <profile/> */}
      {/* <filter/> */}
      {/* <card/> */}
      {/* <footer/> */}
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
        <Route
          path={`/:userid`}
          element={<UserCardDetail data={data} setData={setData} />}
        />
        
      </Routes>

    </div>
  );
}

export default App;
