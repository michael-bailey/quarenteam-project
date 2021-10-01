import React, { useState } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';
import Header from '../components/header'
import { useUser } from '@auth0/nextjs-auth0';

export default function QuizPage() {
    const { user } = useUser();
    const [answers, setAnswers] = useState(new Array(12).fill(null));

    let questions = new Array(14).fill("what is the point?")
    questions = questions.map((text, index) => {
      return <Question key={index} number={index} text={text} oldAnswer={answers[index]}
        setAnswer={(answerNumber) => {
          let oldAnswers = answers
          oldAnswers[index] = answerNumber
          setAnswers(oldAnswers)
        }}/>
    })
    
    return (
		<>
      <Header user={user}/>
			<h1 class="text-center pt-5">Quiz Name</h1>
        <div class="container horizontal-scrollable pb-5">
           <div class="row pb-5 flex-row flex-nowrap">
                {questions.map((question) => <div class="col">{question}</div>)}
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
  const buttonTypes = ["primary", "success", "danger", "warning"]
  const [newAnswer, setNewAnswer] = useState(null)

  return (
    <div id="slide" class="d-flex p-3 rounded rounded-3 border border-dark shadow-custom question" style={{height: "600px"}}>
      <div class="w-100 justify-content-center align-self-center">
        <h1 class="text-center">{props.number + 1}.</h1>
        <p class="text-center">{props.text}</p>
        <div class="d-grid gap-2">
          {buttonTypes.map((type, index) => {
            return <button key={index} type="button" class={"btn p-3 btn-outline-" + type + ((newAnswer ?? props.oldAnswer) === index ? " active" : "")} 
              onClick={() => {
                setNewAnswer(index)
                props.setAnswer(index)
              }}>Option {index+1}</button>
          })}
        </div>
      </div>
    </div>
  )
}