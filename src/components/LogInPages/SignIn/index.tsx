import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import CustomHeading from "components/microComponents/CustomHeading";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";
import FormSubmitButton from "components/LogInPages/commonComponents/FormSubmitButton";
import SignInWithGoogleButton from "components/LogInPages/commonComponents/SignInWithGoogleLink";
import BaseLayout from "components/LogInPages/BaseLayout";
import FormInput from "components/LogInPages/commonComponents/FormInput";
import { Link } from "react-router-dom";
import { loginWithPassword } from "api/services/Auth";
// start of styled-components

const FormContainer = styled.div`
  width: 30.2rem;
  margin: auto;
`;
const SignInForm = styled.form`
  background: white;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;
const FormLabel = styled.label`
  color: #355f44;
  font-size: 0.9rem;
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: underline;
  margin-top: 1.1rem;
  font-weight: 400;
  color: #b3b3b3;
`;
const Divider = styled.div`
  margin: 1.6rem 0rem;
  height: 2px;
  background: #eaefec;
`;
const SignUpLinkContainer = styled.div`
  margin: auto;
  margin-top: 2.5rem;
  color: #355f44;
  font-size: 0.82rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpLink = styled(Link)`
  color: #355f44;
  font-weight: 400;
`;

// end of styled-components

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoadinG] = useState<boolean>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard/analytics");
    }
  }, [navigate]);
  const onSubmit = async function (e: FormEvent) {
    e.preventDefault();
    const login = await loginWithPassword(email, password);
    console.log("login", login);
    if (login.success) {
      navigate("/dashboard/analytics");
    }
  };
  return (
    <BaseLayout>
      <FormContainer>
        <CustomHeading sx={{ marginTop: "1.5rem" }}>
          Welcome back!
        </CustomHeading>
        <SignInForm onSubmit={onSubmit}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput
            name="email"
            type="email"
            autoComplete="username" // autocomplete="username" is intentional
            id="email"
            placeholder="thom@4yourbrand.io"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={loading}
          />
          <FormLabel htmlFor="password" style={{ marginTop: "1.4rem" }}>
            Password
          </FormLabel>
          <FormInput
            name="current- password"
            type="password"
            autoComplete="current-password"
            id="password"
            style={{ letterSpacing: "0.05rem" }}
            placeholder="••••••••••••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={loading}
          />
          <ForgotPasswordLink to="/forgot-password">
            Forgot your password?
          </ForgotPasswordLink>
          <FormSubmitButton type="submit">Sign in</FormSubmitButton>
        </SignInForm>
        <Divider />
        <SignInWithGoogleButton />
        <SignUpLinkContainer>
          <div>
            New to Qrooh?{" "}
            <SignUpLink to="/signup">Create a free account!</SignUpLink>
          </div>
        </SignUpLinkContainer>
      </FormContainer>{" "}
    </BaseLayout>
  );
}

export default SignIn;
