import React from 'react';

export default (props) => {
    let {user, deleteUser, index} = props;
    return (
        <li id={`item-${index + 1}`} className="item">
            <div className="avatar-wrapper">
            <img src={user.avatar} className="avatar" alt={`${user.first_name} ${user.last_name}`} />
            </div>
            <div className="full-name-wrapper">
                <span className="first_name">{user.first_name}</span> <span className="last_name">{user.last_name}</span>
            </div>
            <button className="delete-user-btn" onClick={e => deleteUser(user.id)}>Delete</button>
        </li>
    )
}