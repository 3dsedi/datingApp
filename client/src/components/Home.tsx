import React, {useState,useLayoutEffect} from 'react'
import User from '../interface/User'
import { IoRefresh } from 'react-icons/io5';
import { Search } from './Search';
import '../styles/Home.css'
import { Card } from '../components/Card';
import { Pages } from './Pages';

interface Props {
    results:User[],
    genderresults: User[]
    setQuery: (input:string) => void,
    setgenderQuery: (input:string) => void,
    data:User[]
}

export const Home = ({ data, results, setQuery, setgenderQuery, genderresults} : Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const cardsPerPage = 1;
  
    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentResults = results.slice(firstIndex, lastIndex);
    const currentResults2 = genderresults.slice(firstIndex, lastIndex);

    useLayoutEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      })
    return (
      <main
      //  className='container-xl' style={{minHeight: '100vh'}}
       >
        <Search
         setQuery={setQuery}
         setgenderQuery={setgenderQuery}
         setCurrentPage={setCurrentPage}
         data={data}
        />
         <p className='product-count'>
        {`${results.length} Matches for you`}
        <IoRefresh
          className='refresh'
          onClick={()=> window.location.reload()}/>
      </p>
      <section  className="cardContainer">
          {currentResults.map((user, index) => {
            return (
              <Card
                user={user}
                key={index}/>
              )
            })
          }
           </section> 
           <section className='pagination'>
        <Pages
          totalPages={Math.ceil(results.length/cardsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
      </section>
      </main>
  )
}
