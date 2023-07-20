import { FormEvent, useEffect, useState } from "react";
import CustomHeading from "components/microComponents/CustomHeading";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styled from "styled-components";
import FormSubmitButton from "components/LogInPages/commonComponents/FormSubmitButton";
import SignInWithGoogleButton from "components/LogInPages/commonComponents/SignInWithGoogleLink";
import BaseLayout from "components/LogInPages/BaseLayout";
import FormInput from "components/LogInPages/commonComponents/FormInput";
import { Link } from "react-router-dom";
import { signUpWithPassword } from "api/services/Auth";

// start of styled-components
const FormContainer = styled.div`
  width: 30.2rem;
  margin: auto;
`;
const SignUpForm = styled.form`
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

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoadin] = useState<boolean>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard/analytics");
    }
  }, [navigate]);
  const onSubmit = async function (e: FormEvent) {
    e.preventDefault();
    const login = await signUpWithPassword("unknown", email, password);
    if (login.success) {
      navigate("/dashboard/analytics");
    }
  };
  return (
    <BaseLayout>
      <FormContainer>
        <CustomHeading sx={{ marginTop: "1.5rem" }}>
          Create your free account!
        </CustomHeading>
        <SignUpForm onSubmit={onSubmit}>
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
          />
          <FormLabel htmlFor="password" style={{ marginTop: "1.4rem" }}>
            Password
          </FormLabel>
          <FormInput
            name="new-password"
            type="password"
            autoComplete="new-password"
            id="password"
            style={{ letterSpacing: "0.05rem" }}
            placeholder="••••••••••••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <FormSubmitButton type="submit">Create your account</FormSubmitButton>
        </SignUpForm>
        <Divider />
        <SignInWithGoogleButton />
        <SignUpLinkContainer>
          <div>
            Already have an account?{" "}
            <SignUpLink to="/">Sign in here!</SignUpLink>
          </div>
        </SignUpLinkContainer>
      </FormContainer>{" "}
    </BaseLayout>
  );
}

export default SignUp;
