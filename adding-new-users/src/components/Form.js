import React from 'react';

function Form (props) {
    return(
        <form onSubmit={props.onSubmit}>
            <h3>Please Fill Out The Form Below</h3>

            <label>Name:
                <input
                name='name'
                type='text'
                value={props.values.name}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />

            <label>Email:
                <input
                name='email'
                type='email'
                value={props.values.email}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />

            <label>Password:
                <input
                name='password'
                type='password'
                value={props.values.password}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />

            <label>Do you Agree to the Terms of Service?:
                <input
                name='tos'
                type='checkbox'
                value={props.values.tos}
                onChange={props.inputChange}
                ></input>
            </label>

            <br />

            <div className='errors'>
                {props.errors.name.length > 0 ? (<p>{props.errors.username}</p>) : null}
                {props.errors.email.length > 0 ? (<p>{props.errors.email}</p>) : null}
                {props.errors.password.length > 0 ? (<p>{props.errors.password}</p>) : null}
                {props.errors.tos === false ? (<p>{props.errors.tos}</p>) : null}
            </div>

            <button>Submit</button>
        </form>
    );
};

export default Form;