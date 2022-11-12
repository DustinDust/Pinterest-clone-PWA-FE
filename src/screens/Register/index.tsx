import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "components/Header/index";
import "./styles.scss";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  age: yup.string().required(),
  name: yup.string().required()
});

const Register = () => {
  const handleSubmit = () => {
    console.log(123);
  };
  return (
    <div className="register">
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", passwordConfirm: "", age:"", name:"" }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Họ tên"
              className={`input ${errors.name && "error"}`}
            />
            {errors.name && (
              <div className="feedback">Hãy nhập họ tên của bạn.</div>
            )}
            <input
              name="age"
              type="number"
              onChange={handleChange("age")}
              onBlur={handleBlur("age")}
              value={values.age}
              placeholder="Tuổi của bạn"
              className={`input ${errors.age && "error"}`}
            />
            {errors.age && (
              <div className="feedback">Hãy nhập tuổi của bạn.</div>
            )}
            <input
              name="email"
              type="email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
              className={`input ${errors.email && "error"}`}
            />
            {errors.email && (
              <div className="feedback">Email trống hoặc không hợp lệ.</div>
            )}
            <input
              type="password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              name="password"
              placeholder="Mật khẩu"
              className={`input ${errors.password && "error"}`}
            />
            {errors.password && (
              <div className="feedback">Hãy điền mật khẩu của bạn</div>
            )}
            <input
              type="password"
              onChange={handleChange("passwordConfirm")}
              onBlur={handleBlur("passwordConfirm")}
              value={values.passwordConfirm}
              name="passwordConfirm"
              placeholder="Xác nhận mật khẩu"
              className={`input ${errors.passwordConfirm && "error"}`}
            />
            {errors.passwordConfirm && (
              <div className="feedback">Mật khẩu không trùng khớp</div>
            )}
            <button type="submit" className={`button ${isValid && "valid"}`} disabled={!isValid}>
              Đăng nhập
            </button>
          </form>
        )}
      </Formik>
      <div className="register">
        <div>
          Đã có Tài khoản?{" "}
          <Link className="link" to="/login">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
