import React, { useRef } from "react";
import User from "../interface/User";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../styles/AddUser.css'

interface Props {
  addUser: (enteredUser: {
    name: string;
    gender: string;
    age: number;
    img: string;
    dsc: string;
  }) => void;
}

export const AddUser = ({ addUser }: Props) => {
  const navigate = useNavigate();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const dscInputRef = useRef<HTMLTextAreaElement>(null);

  const userSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (imgInputRef.current?.files?.length) {
      const file = imgInputRef.current.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target?.result as string;
        const enteredUser = {
          img: dataURL,
          name: nameInputRef.current!.value,
          age: +ageInputRef.current!.value,
          gender: genderInputRef.current!.value,
          dsc: dscInputRef.current!.value,
        };
        console.log(enteredUser);
        addUser(enteredUser);

       nameInputRef.current!.value = '';
       ageInputRef.current!.value= ''
       genderInputRef.current!.value=''
       dscInputRef.current!.value=''
       imgInputRef.current!.value=''
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="form" onSubmit={userSubmitHandler}>
      <div className="back-arrow-form" onClick={() => navigate(-1)}>
        <MdArrowBackIos />
      </div>
      <div className="from__item">
        <div>
          <label className="form__lable" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            ref={nameInputRef}
          />
        </div>
        <div >
          <label className="form__lable" htmlFor="breed">
            Gender
          </label>
          </div>
          <div className="input__gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            ref={genderInputRef}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            ref={genderInputRef}
          />
          <label htmlFor="female">Female</label>
          
        </div>
        <div>
          <label className="form__lable" htmlFor="birth date">
            Age
          </label>
          <input
            className="form__input"
            type="number"
            id="age"
            min="18"
            max="90"
            ref={ageInputRef}
          />
        </div>
        <div>
          <label className="form__lable" htmlFor="dsc">
            Describe Yourself
          </label>
          <textarea className="form__input dsc__input" id="dsc" ref={dscInputRef} />
        </div>
        <div>
          <label className="form__lable" htmlFor="img">
            Image
          </label>
          <input className="form__input" type="file" ref={imgInputRef} />
        </div>
      </div>
      <button className="submit">Add</button>
    </form>
  );
};
