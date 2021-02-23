//First Section//
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import DesignIllustration from "../../images/DSC_4721 (1).jpg";
import '../../App.css';
import booze from "../../images/booze.gif";
import Button from "../buttons/index.js";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as WebsiteIcon } from "../../images/website.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-2/6 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-bold text-blue-900 md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-500 hover:text-gray-900 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;


export default ({
  heading = "Booze By Me",
 description="A simple Javascript site to help you find and try new drinks. View a list of 10 random cocktails and their ingredients and then search for the drink you would like at a location near you",
  imageSrc=booze,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <SocialLinksContainer>
            <SocialLink href="https://github.com/brianneewell1/boozebyme">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://github.com/brianneewell1/boozebyme.git">
              <WebsiteIcon />
            </SocialLink>
           </SocialLinksContainer>
           </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                className="hero-image"
                src={imageSrc}
                alt="Progressive Budget Site"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
         <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
       </StyledModal>
      </Container>
    </>
  );
};
