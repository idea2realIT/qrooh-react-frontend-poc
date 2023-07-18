import styled from "styled-components";
import BackgroundImage from "../../images/background.webp";
import logo from "../../images/logoQ.png";
import name from "../../images/name.png";
import { ReactNode } from "react";
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;
interface SignInPageLeftContainerProps {
  backgroundImage: string;
}
const SignInPageLeftContainer = styled.div<SignInPageLeftContainerProps>`
  width: 50%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: top;
  background-size: cover;
  position: relative;
`;
const OverlayDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #59b947;
  left: 0;
  top: 0;
  opacity: 0.3;
`;

const LogoImageAtCenter = styled.img`
  position: absolute;
  transform-origin: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 13.5rem;
  width: 13.5rem;
`;
const SignInPageRightContainer = styled.div`
  flex-grow: 1;
  padding: 2.3rem;
  width: 50%;
`;
const SignInPageRightInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TopRightImageContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const TopRightLogoImage = styled.img`
  width: 9.375rem;
  height: 3.25rem;
`;
const BottomRightLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2.4rem;
`;
const SupportLink = styled.a`
  text-decoration: none;
  background: #355f44;
  height: 2.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
  padding: 0.8rem 2.6rem;
  border-radius: 12px 12px 0px 12px;
`;
function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <SignInPageLeftContainer backgroundImage={BackgroundImage}>
        <OverlayDiv />
        <LogoImageAtCenter src={logo} alt="logo" />
      </SignInPageLeftContainer>
      <SignInPageRightContainer>
        <SignInPageRightInnerContainer>
          <TopRightImageContainer>
            <TopRightLogoImage src={name} alt="named-logo" />
          </TopRightImageContainer>
          {children}
          <BottomRightLinkContainer>
            <SupportLink href="/support">Support?</SupportLink>
          </BottomRightLinkContainer>
        </SignInPageRightInnerContainer>
      </SignInPageRightContainer>
    </Container>
  );
}

export default BaseLayout;
