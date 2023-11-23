// src/components/UserTable.js
import React, { useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const UserTable = () => {


    const users = useSelector((state)=>state.users.userData)
    useEffect(() => {
        console.log('UserTable updated with new users:', users);
      }, [users]); 
    return (
        
        <div className="flex justify-center mt-8 p-11" style={{width:'100%'}}>
            
            <table class="border-collapse table-auto w-full text-sm p-11" >
                <thead>
                    <tr>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">user Id</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">First Name</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Last Name</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Birth Date</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Gender</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                    {users.map((user,index) => (

                        <tr key={index}>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.id}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.first_name}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.last_name}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.email}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.birth_date}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.gender}</td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">      <FaEdit className="text-blue-500 cursor-pointer" size={24} />
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">      <FaTrash className="text-red-500 cursor-pointer" size={24} />
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </div>
    );
};

export default UserTable;
