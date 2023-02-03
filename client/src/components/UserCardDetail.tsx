import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import User from '../interface/User'
import { MdArrowBackIos } from 'react-icons/md';
import userEvent from '@testing-library/user-event';
import '../styles/UserDetail.css'
// import '../styles/Product.css'

interface Props {
    data: User[],
    setData: (state:User[]) => void,
    // results: User[],
  }


export const UserCardDetail = ({data, setData}:Props) => {

    const param = useParams();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo({
          top: 0,
        });
      })

  return (
    <main  style={{minHeight: '100vh'}}>
    <section className='user-container'>
      {data.filter(user => user.id === param.userid).map((user, index) => {
        return (
          <article key={index} className='user-article'>
            <div
              className='back-arrow'
              onClick={()=> navigate(-1)}>
              <MdArrowBackIos/>
            </div>
            <div className='user'>
              <div>
                <img className='user-img'
                  src={user.img}
                  alt='Img'/>
              </div >
              <div className='user-detail'>
                <p className='user-name'>{user.name}</p>
                <p className='user-text'>{user.gender}</p>
                <p className='user-text'>{user.age} Years old</p>
                <p className='user-text'>{user.dsc}</p>

                {/* <button
                  className='order-btn'
                  onClick={()=> {
                    if (product.storage === 0) {
                      alert('Product out of stock!')
                    } else if (product.storage - storage === 0) {
                      alert('Please use the slider to select number of liters for order')
                    } else {
                      navigate('/orderconfirmation');
                      updateStorage(storage)}}
                    }>
                    Place Order
                </button> */}
                <div className='userCard-button'>
                <button  className='like-btn'> Like</button>
                <button  className='like-btn'> chat</button>
                </div>
              </div>
            </div>
          </article>
          )
        })}
    </section>
  </main>
  )
}
