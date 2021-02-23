import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../images/email-newsletter-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <Row>
        <SocialLinksContainer>
           <h1>Contact Me</h1>
          </SocialLinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://github.com/brianneewell1">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/brianne-ewell-079470133/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="mailto:brianne.ewell1@gmail.com">
              <EmailIcon />
            </SocialLink>
          </SocialLinksContainer>
         </Row>
      </Content>
    </Container>
  );
};
