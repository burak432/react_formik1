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
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" onChange={handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
