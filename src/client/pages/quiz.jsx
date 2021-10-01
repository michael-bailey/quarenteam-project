import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';
import Header from '../components/header'
import { useUser } from '@auth0/nextjs-auth0';

export default function QuizPage() {
    const { user } = useUser();
    const [questionNo, setQuestionNo] = useState(0);
    const [answers, setAnswers] = useState(new Array(12).fill(null));

    let questions = new Array(12).fill("what is the point?")
    questions = questions.map((text, index) => {
      return <Question number={index} text={text} isSelected={index === questionNo} 
        onPick={(answerNumber) => {
          let oldAnswers = answers
          oldAnswers[index] = answerNumber
          setAnswers(oldAnswers)
          setQuestionNo(next)

          console.log(answers)
        }}/>
    })

    const previous = questionNo === 0 ? questions.length - 1 : questionNo - 1
    const next = (questionNo + 1) % questions.length
    
    return (
		<>
			<Header user={user}/>
        <div class="row p-5">
          <div class="col-1 d-flex justify-content-center white">
            <div class="align-self-center">
              <button type="button" class="btn btn-dark rounded-circle" onClick={() => setQuestionNo(previous)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="col">
            {questions[previous]}
          </div>
            <div class="col">
              {questions[questionNo]}
            </div>
            <div class="col">
              {questions[next]}
            </div>
            <div class="col-1 d-flex justify-content-center white">
            <div class="align-self-center">
              <button type="button" class="btn btn-dark rounded-circle" onClick={() => setQuestionNo(next)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-arrow-right icon" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </div>
            </div>
        </div>
        <div class="row px-5">
          <div class="col d-grid">
            <Link href='/about' passHref>
              <a class="btn btn-dark p-3">Abandon</a>
            </Link>
          </div>
          <div class="col d-grid">
            <button type="button" class="btn btn-primary p-3">Complete</button>
          </div>
        </div>
		</>
	);
}

function Question(props) {
  const border = " border " + (props.isSelected ? "border-dark" : "border-secondary")
  const shadow = props.isSelected ? " shadow-1" : " shadow-2"
  const text = props.isSelected ? "text-center" : "text-secondary text-center"
  const buttonTypes = ["primary", "success", "danger", "warning"]

  return (
    <div id="slide" key={props.number} class={"d-flex p-3 rounded rounded-3"+border+shadow} style={{height: "600px"}}>
      <div class="w-100 justify-content-center align-self-center">
        <h1 class={text}>{props.number + 1}.</h1>
        <p class={text}>{props.text}</p>
        <div class="d-grid gap-2">
          {buttonTypes.map((type, index) => {
            return <button type="button" class={"btn p-3 btn-" + (props.isSelected ? type : "secondary")} disabled={!props.isSelected} onClick={() => {props.onPick(index)}}>Option {index+1}</button>
          })}
        </div>
      </div>
    </div>
  )
}