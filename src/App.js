import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" onChange={handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" onChange={handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <label htmlFor="male">male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
          />

          <br />
          <br />

          <button type="submit">Submit</button>

          <br />
          <br />
          <div>{JSON.stringify(values)}</div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
