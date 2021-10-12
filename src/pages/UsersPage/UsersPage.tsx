import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/usersPage-reducer';
import { selectUsers } from '../../redux/usersPage-selectors';
import "./UsersPage.scss";

const UsersPage: React.FC = () => {

    const dispatch = useDispatch();

    const users = useSelector(selectUsers);

    useEffect(()=>{
        dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="users">
            <div className="container">
                
            </div>
        </div>
    )
}

export default UsersPage
