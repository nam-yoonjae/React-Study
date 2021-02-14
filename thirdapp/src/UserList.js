import React from 'react';

function UserRender({user}){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
};

function UserList () {

    const users = [
        {
            id : '1'
            , username : '남윤재'
            , email : 'nyj9349@hanmail.net'
        },
        {
            id : '2'
            , username : '벨로퍼트'
            , email : 'velopert@gmail.com'
        },
        {
            id : '3'
            , username : '홍길동'
            , email : 'hong@gmail.com'
        }
    ];


    return (
        <>
           <div>
               <UserRender user={users[0]}/>
           </div>
        </>
    );
};  

export default UserList;