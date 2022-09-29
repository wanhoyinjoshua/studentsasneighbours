import styled from "styled-components";


export const HeroContainer = styled.div`
  display: flex;
  background-position: 20% 60%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 8px 24px;
    bottom: 50%;
  }
`;
export const Herobg = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url("/assets/Contact-Form-Picture.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-image: url("/assets/images/shutterstock/Untitled (Desktop Wallpaper) (Phone Wallpaper).svg");
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;

    background-position: center;
  }
`;

export const Heroh1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Herop = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Herobtnwrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// export const Circlemask = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   width: 1300px;
//   height: 1300px;
//   background-color: white;
//   right: 2%;
//   bottom: 35%;
//   z-index: 1;
// `;

