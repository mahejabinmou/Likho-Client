import React from 'react';
import { FaHome, FaPlus, FaThList } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const UserDashboard = () => {
   
    return (
        <div className='text-[#1c3a45] gap-3'>
            <li className='text-xl mb-4'><Link to={'/'}><FaHome></FaHome> User Home</Link></li>
            <li className='text-xl mb-4'><Link to={'/dashboard/newDoc'}><FaPlus></FaPlus>New Document</Link></li>
            <li className='text-xl mb-4'><Link to={'/Doc'}><FaPlus></FaPlus> Realtime Editor</Link></li>
            {/* <li className='text-xl mb-4'><Link to={'/dashboard/inbox'}><FaThList></FaThList>Inbox</Link></li>
            <li className='text-xl mb-4'><Link to={'/dashboard/sent'}><FaThList></FaThList>Sent</Link></li> */}
            <li className='text-xl mb-4'><Link to={'/dashboard/setting'}><FaThList></FaThList>Setting</Link></li>
            <li className='text-xl mb-4'><Link to={'/dashboard/template'}><FaThList></FaThList>Template</Link></li>
            {/* <li><Link to={`/dashboard/payment/${AllClasses._id}`}><FaWallet></FaWallet> Payment</Link></li> */}
        
        </div>
    );
};

export default UserDashboard;