import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';
import { useDispatch } from 'react-redux';


const UserForm = () => {
    let actiontype="Save"

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()
    const  dispatch =useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
        id: String(new Date().getTime()),
        first_name: firstname,
        last_name: lastname,
        email: email,
        birthDate: birthDate,
        gender: gender,
      };
      console.log('Form submission payload:', user);
      dispatch(addUser(user));
      navigate('/');
    };
    


    return (
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <button>
        <Link to="/userList"><FaArrowLeft size={54} className="text-blue-500 cursor-pointer mt-2" /></Link> 
      </button>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-white">User Form</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6  text-white">First Name</label>
              <div className="mt-2">
                <input id="firstname" name="firstname" 
                onChange={e=>setFirstname(e.target.value)} type="text" autoComplete="firstname" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-white">Last Name</label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input id="lastname" name="lastname"
                 onChange={e=>setLastname(e.target.value)}   type="text" autoComplete="lastname" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6  text-white">Email </label>
              <div className="mt-2">
                <input id="email" name="email" 
                 onChange={e=>setEmail(e.target.value)}  type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="birth_date" className="block text-sm font-medium leading-6  text-white">Birth Date</label>
              <div className="mt-2">
                <input id="birth_date" name="birth_date"
                 onChange={e=>setBirthDate(e.target.value)}  type="date" autoComplete="birth_date" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium leading-6  text-white">Gender</label>
              <div className="mt-2">
                <input id="gender" name="gender"
                 onChange={e=>setGender(e.target.value)}  type="text" autoComplete="gender" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{actiontype}</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
          </p>
        </div>
      </div>
    );
  
};



export default UserForm
