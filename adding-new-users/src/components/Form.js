import React from 'react';

function Form (props) {
    return(
        <div>
            <h3>Please Fill Out The Form Below</h3>

            <label>Name:
                <input
                name='name'
                type='text'
                ></input>
            </label>

            <br />

            <label>Email:
                <input
                name='email'
                type='text'
                ></input>
            </label>

            <br />

            <label>Password:
                <input
                name='password'
                type='text'
                ></input>
            </label>

            <br />

            <label>Do you Agree to the Terms of Service?:
                <input
                name='name'
                type='checkbox'
                ></input>
            </label>

            <br />

            <button>Submit</button>
        </div>
    );
};

export default Form;