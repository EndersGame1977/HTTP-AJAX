import React, { Component } from "react";
import Friend from './friend';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend friend={friend} />
        );
      })}
    </div>
  );
};

export default FriendsList;
