import React from "react";
import tw from "twin.macro";
import './App.css';
import Hero from "components/hero/TwoColumnWithVideo.js";
// import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
//import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/ProfileThreeColGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-blue-900 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-blue-900 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-600`;
  const imageCss = tw`rounded-3xl`;

  return (
    <>
        <Hero
        heading={<>Brianne Ewell<HighlightedText>Web Developer</HighlightedText></>}
        subheading={<Subheading>Web Developer</Subheading>}
        description="Full stack developer with expertise in product design, optimizing user experience, and problem-solving"
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
       />
       {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
     
     <TabGrid
     heading={
       <>
         Checkout my <HighlightedText>Portfolio</HighlightedText>
       </>
     }
   />  
       <MainFeature
       heading={
         <>
          About Me
          </>
       }
       description={
         <Description>
          My name is Bri Ewell. I am a full stack developer with expertise in product design, optimizing user experience, and problem-solving. I am proficient in multiple coding languages so I am able to deliver support to both the front and backend of your website. I currently work as a billing manager and oversee utility billing for over 150 properties. I work closely with the IT department to beta-test new products and am the main point of contact for properties that have questions about how to use our website. While running my own business a few years ago, I discovered a passion for graphic and web design. I built my own websites and designed all marketing material. That interest led me to enroll in a Full-Stack Web Development Program at the University of Utah, that I will finish next month.
           <br />
           <br />
           I recently purchased and renovated my first home in Providence, Utah. I live there with my wife, Merissa, and our dog, Casey. I enjoy being outdoors, kayaking, hammocking, and camping.
         </Description>
       }
         imageSrc="/src/images/bri.jpg"
         imageCss={imageCss}
         imageDecoratorBlob={true}
         imageDecoratorBlobCss={tw`left-auto -translate-x-1/2 md:w-20 md:h-32 opacity-25`}
       />
    
     
   </>
  );
}
