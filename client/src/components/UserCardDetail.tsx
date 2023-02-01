import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import User from '../interface/User'
import { MdArrowBackIos } from 'react-icons/md';
import userEvent from '@testing-library/user-event';
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
    <main className='container-xl' style={{minHeight: '100vh'}}>
    <section className='product-container'>
      {data.filter(user => user.id === param.userid).map((user, index) => {
        return (
          <article key={index} className='product-article'>
            <div
              className='back-arrow'
              onClick={()=> navigate(-1)}>
              <MdArrowBackIos/>
              <p>Back</p>
            </div>
            <div className='product'>
              <div className='product-img'>
                <img className='product-milk-img'
                  src={user.img}
                  alt='Img'/>
              </div >
              <div className='product-detail'>
                <p className='product-text'>{user.name}</p>
                <p className='product-text'>{user.gender}</p>
                <p className='product-text'>{user.age} Years old</p>
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
                <button  className='order-btn'> Like</button>
              </div>
            </div>
          </article>
          )
        })}
    </section>
  </main>
  )
}
