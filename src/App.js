import React from "react";
import tw from "twin.macro";
import './App.css';
import Hero from "components/hero/main.js";
import MainFeature from "components/features/AboutMe.js";
import Budget from "components/hero/budget.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Workout from "components/hero/workout.js"
import Blog from "components/hero/blog.js"
import Pet from "components/hero/petcetera.js"
import Booze from "components/hero/booze.js"
import Team from "components/hero/team.js"
import Header from "components/headers/light.js"


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-blue-900 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-blue-900 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-600`;
  const imageCss = tw`rounded-3xl`;

  return (
    <>
      <Hero
        heading={<>Bri Ewell  <HighlightedText> Web Developer</HighlightedText></>}
        description="Full stack developer with expertise in product design, optimizing user experience, and problem-solving"
      />
           
     <Budget
     heading={<>Progressive Budget</>}
     description="React project that allows users to track expenses online and offline with a dynamically created table and graph"
   />  
   <Workout />
   <Blog />
   <Pet />
   <Booze />
   <Team />
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
      <Footer />
   </>
  );
}
