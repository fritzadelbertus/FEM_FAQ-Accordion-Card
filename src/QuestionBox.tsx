import { useRef, useState } from "react"
import useExpandAnswer from './useExpandAnswer'
import arrowSVG from './assets/icon-arrow-down.svg'

type QuestionBoxProp = {
  props: {
    question: string,
    answer: string
  } 
}

function QuestionBox({props}: QuestionBoxProp) {
  const { question, answer } = props
  const [ extend, setExtend ] = useState(false)
  const answerElement = useRef<HTMLParagraphElement>(null);
  const [answerHeight, expandAnswer] = useExpandAnswer(answerElement)

  return (
    <div className="QuestionBox">
      <p 
        className={`question ${extend ? 'extended': ''}`}
        onClick={() => { expandAnswer(); setExtend(!extend) }}>
        {question} 
        <img src={arrowSVG} alt="arrow" />
      </p>
      <div className="expand" style={{height:`${answerHeight}px`}}>
        <p ref={answerElement}>{answer}</p>
      </div>
    </div>
  )
}

export default QuestionBox
