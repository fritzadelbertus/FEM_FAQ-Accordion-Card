import QuestionBox from "./QuestionBox"
import faqData from "./faq-data"
import illusDesktop from './assets/illustration-woman-online-desktop.svg'
import illusMobile from './assets/illustration-woman-online-mobile.svg'
import patternDesktop from './assets/bg-pattern-desktop.svg'
import patternMobile from './assets/bg-pattern-mobile.svg'
import boxSVG from './assets/illustration-box-desktop.svg'

function FAQAccordionCard() {
  return (
    <div className="FAQAccordionCard">
      <div className="illustrations">
        <div>
          <picture>
            <source media="(min-width:765px)" srcSet={illusDesktop} />
            <source media="(min-width:465px)" srcSet={illusMobile} />
            <img src={illusMobile} alt="Background Pattern" />
          </picture>
          <picture>
            <source media="(min-width:765px)" srcSet={patternDesktop} />
            <source media="(min-width:465px)" srcSet={patternMobile} />
            <img src={patternMobile} alt="Background Pattern" />
          </picture>
        </div>
        <picture className='desktop-box'>
          <source media="(min-width:765px)" srcSet={boxSVG} />
          <img src="" alt="" />
        </picture>
      </div>
      <div className="faq-content">
        <h1>FAQ</h1>
        <div>
          {faqData.map((question) => <QuestionBox key={question.question} props={question} />)}
        </div>
      </div>
    </div>
  )
}

export default FAQAccordionCard
