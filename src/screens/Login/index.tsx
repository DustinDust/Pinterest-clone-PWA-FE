import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Header from "components/Header/index";
import { useDispatch } from 'react-redux';
import { login } from "./actions";
import "./styles.scss";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

export interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values: LoginForm) => {
    dispatch(login(values));
  };
  return (
    <div className="login">
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" } as LoginForm}
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
            <button
              type="submit"
              className={`button ${isValid && "valid"}`}
              disabled={!isValid}
            >
              Đăng nhập
            </button>
          </form>
        )}
      </Formik>
      <div className="register">
        <div>
          Chưa có Tài khoản?{" "}
          <Link className="link" to="/register">
            Đăng ký
          </Link>
        </div>
      </div>
      <div className="policy">
        Bằng cách tiếp tục, bạn đồng ý với{" "}
        <a className="link" href="https://policy.pinterest.com/vi/terms-of-service" target="_blank">
          Điều khoản dịch vụ
        </a>{" "}
        của Pinterest và xác nhận rằng bạn đã đọc{" "}
        <div>
          <a className="link" href="/https://policy.pinterest.com/vi/privacy-policy" target="_blank">
            Chính sách Quyền riêng tư
          </a>{" "}
          của chúng tôi
        </div>
      </div>
    </div>
  );
};

export default Login;
