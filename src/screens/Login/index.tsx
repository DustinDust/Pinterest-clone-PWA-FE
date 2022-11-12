import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Header from "components/Header/index";
import "./styles.scss";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

const Login = () => {
  const handleSubmit = () => {
    console.log(123);
  };
  return (
    <div className="login">
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
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
            <div className="forgot-password">Quên mật khẩu?</div>
            <button type="submit" className={`button ${isValid && "valid"}`} disabled={!isValid}>
              Đăng nhập
            </button>
          </form>
        )}
      </Formik>
      <div className="register">
        <div>
          Chưa có Tài khoản?{" "}
          <Link className="link" to="/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
