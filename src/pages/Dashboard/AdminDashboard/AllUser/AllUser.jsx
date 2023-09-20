import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import SingleUser from '../SingleUser/SingleUser';

const AllUser = () => {

    const { data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/user')
            console.log('res',res)
            return res.data
        }
    })
    // console.log(users)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>

                {
                    users?.map(user=> <SingleUser key={user._id} user={user}></SingleUser> )
                }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;