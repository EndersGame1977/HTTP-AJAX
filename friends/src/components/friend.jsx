import React, { Component } from 'react';

const Friend = (props) => {
    const { id, name, age, email } = props.friend;
    return ( 
        // <div key={id}>
        //     <h2>{name}</h2>
        //     <p>{age}</p>
        //     <code>{email}</code>
        // </div>
        <div class="card-deck">
            <div key={id} class="card m-2">
                <h5 class="card-header text-center">{name}</h5>
                <div class="card-body">
                    <h5 class="card-title text-center">Age: {age}</h5>
                    <p class="card-text text-center">Email: <code>{email}</code></p>
                    <div className="d-flex justify-content-between">
                        <a href="#" class="btn btn-primary mr-2">Edit</a>              
                        <a href="#" class="btn btn-primary ml-2">Delete</a>
                    </div>
                </div>
            </div>
        </div>
        // <div class="card" style="width: 18rem;">
        //     <div class="card-body">
        //         <h5 class="card-title">{name}</h5>
        //         <p class="card-text">Age: {age}</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>
     );
}
 
export default Friend;