//About Me Section//

import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import TeamIllustrationSrc from "../../images/bri.png";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import '../../App.css';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-2/6 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Image = styled.img(props => [
  props.imageRounded && tw`rounded-lg`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
const Heading = tw.h1`font-bold text-blue-900 md:text-5xl leading-snug max-w-3xl`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-600`;

export default ({
  heading = (
    <>
     
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
        <IllustrationContainer>
              <img
                className="hero-image"
                src= {TeamIllustrationSrc}
                alt="Bri Ewell"
              />
             </IllustrationContainer>
         </LeftColumn>
        <RightColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            </TextContent>
        </RightColumn>
      </TwoColumn>
    </Container>
  );
};
