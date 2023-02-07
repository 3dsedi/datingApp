import React, {useState, useEffect} from "react";
import User from "../interface/User";
import { Card } from '../components/Card';
import { Pages } from "./Pages";


interface Props {
  data: User[]
}

export const Home = ({ data } : Props) => {
  const [selectedGender, setSelectedGender] =  useState<"all" | "male" | "female">("all");
  const [minAge, setMinAge] = useState<number>(18);
  const [maxAge, setMaxAge] = useState<number>(90);


  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 1;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
 
  

  const genderFilterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value as "all" | "male" | "female");
    
  };

 

  const ageFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "minAge") {
      setMinAge(+event.target.value);
    } else if (event.target.name === "maxAge") {
      setMaxAge(+event.target.value);
    }
  };



  const filteredData = data
  .filter((item) => selectedGender === "all" || item.gender === selectedGender)
  .filter((item) => item.age >= minAge && item.age <= maxAge);

  const currentResults = filteredData.slice(firstIndex, lastIndex);


  return(
    <article >
          <form className="filter">
          <label htmlFor="filter-data">Gender:</label>
            <select
              value={selectedGender}
              defaultValue="select"
              onChange={genderFilterHandler}
            >
              <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
            </select>
            <br />
        <label className="age__lable" htmlFor="minAge">Min Age:</label>
        <input
        className="age__input"
          type="number"
          name="minAge"
          value={minAge}
          onChange={ageFilterHandler}
        />
        <br />
        <label className="age__lable" htmlFor="maxAge">Max Age:</label>
        <input
        className="age__input"
          type="number"
          name="maxAge"
          value={maxAge}
          onChange={ageFilterHandler}
        />
          </form>
          <p className='product-count'>
            {filteredData.length} matches for you</p>
          <main className="cardContainer">

          {currentResults.map((user , index) => (
          <Card key={index} 
           user={user}/>
        ))}
          <section className='pagination'>
        <Pages
          totalPages={Math.ceil(filteredData.length/cardsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
      </section> 
      
          </main>
        </article>
    )
  };
 




