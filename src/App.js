import Header from './components/Header/Header'
import Main from './components/world-section/Main'
import Section from './components/section/Section';
import Review from './components/reviews/Review';
import Cta from './components/CTA/Cta';
import Styles from './App.module.css';
import online from './assets/images/goOnline.svg';
import check from './assets/images/check.png';
import explore from './assets/images/explore.svg'
import shop from './assets/images/shop.svg'
import { strings } from './components/Strings';

function App() {

  const section1body = [
    strings.section1pointTwo,
    strings.section1pointOne,
    strings.section1pointThree,
    strings.section1pointFour,
    strings.section1pointFive,
  ]

  return (
    <div className={Styles.App}>
      <Header />
      <Main />
      <Section 
        img={online} 
        dir="right"
        head={strings.section1head}
        subtext={strings.section1subtext}
        points={section1body}
        check={check}
        alt="world"/>
      <Section 
        img={explore}
        head={strings.section2head}
        subtext={strings.section2body}
        alt="explore"
      />
      <Section 
        dir='right'
        img={shop}
        head={strings.section3head}
        alt="shop"
      />
      <Review />
      <Cta />
      <p className={Styles.footer}>
        <span></span>  
       
        <span></span>YASHIV.IO</p>
    </div>
  );
}

export default App;
