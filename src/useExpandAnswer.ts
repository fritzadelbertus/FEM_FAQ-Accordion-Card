import { useState } from "react";

type expandValue = [number, (() => void)]

function useExpandAnswer(element: React.RefObject<HTMLParagraphElement>) {
  const [ answerHeight, setAnswerHeight ] = useState(0)
  const expandAnswer = () => {
    if (answerHeight == 0 && element.current != null) {
      setAnswerHeight(element.current.clientHeight)
    } else {
      setAnswerHeight(0)
    }
  }
  const returnValue: expandValue = [ answerHeight, expandAnswer ]
  return returnValue
}

export default useExpandAnswer
