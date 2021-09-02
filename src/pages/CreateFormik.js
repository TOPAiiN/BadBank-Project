import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from 'react-bootstrap';



const CreatingNewAccounts = () => {
  const [showBtn, setShowBtn] = useState(false);

  const okMsg = <button variant="primary" type="submit" className="btn btn-primary mb-3" >Create New Account</button>

  const fieldsValidated = (validationSchema) => {
    if (validationSchema === true){
      showBtn(true);
      okMsg(true);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      show: false,
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, "Please use your full name")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),

    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log('prueba: ',formik.values.show)
    },
  });

  
  return (
    <>
    <form className="col-md-6 gy-2 gx-3 py-3 justify-content-center card-back" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3 form-control card-back dark border-0 "  controlId="formBasicName">
            <h2 className="d-flex justify-content-center p-3">Fill your details and become part of our community!</h2>
            <label htmlFor='firstName' className="p-1 w-50">First Name</label>

            <input
                id='firstName'
                name='firstName'
                type='input'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="Write your full name"
            />

            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error-styling">{formik.errors.firstName}</div>
            ) : null}
        </Form.Group>
        <Form.Group className="mb-3 form-control card-back dark border-0 d-flex justify-content-center" controlId="formBasicEmail">
            <label htmlFor='email' className="p-1 w-50">Email Address</label>

            <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Needs to be real"
            />

            {formik.touched.email && formik.errors.email ? (
                <div className="error-styling">{formik.errors.email}</div>
            ) : null}
        </Form.Group>
        <Form.Group className="mb-3 form-control card-back dark border-0 d-flex justify-content-center no-border" controlId="formBasicPassword">
            <label htmlFor='password' className="p-1 w-50">Password</label>

                <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="At least 8 characters"
                />

            {formik.touched.password && formik.errors.password ? (
            <div className="error-styling">{formik.errors.password}</div>
            ) : null}
        </Form.Group>
        {okMsg ? true : null}
    </form>
    </>
  );
};

export default CreatingNewAccounts;