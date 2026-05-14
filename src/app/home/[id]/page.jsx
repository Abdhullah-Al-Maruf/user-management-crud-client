import { getSingleUser } from '@/lib/data';
import React from 'react';

const detailsPage =async ({params}) => {
    const {id}= await params;
    const user=await getSingleUser(id)
    console.log(user);
    return (
        <div>
            {user.name}
        </div>
    );
};

export default detailsPage;