import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/header'
import { useUser } from '@auth0/nextjs-auth0';


export async function getStaticProps(context) {
  // let questions = []
  // try {
  let response = await fetch('http://localhost:3000/backend/question/', {
      method: 'GET', 
      mode: 'cors', 
    })
  let questions = await response.json();
  // } catch {}
  
  return {
    props: { questions },
  }
}

export default function QuizPage(props) {
  console.log(props.questions)
    const { user } = useUser();
    // const [answers, setAnswers] = useState(new Array(props.questions.length).fill(null)); 

    // let questions = props.questions
   const [answers, setAnswers] = useState(new Array(14)) 

    let questions = new Array(14).fill("why? ")

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
			<h1 class="text-center py-5">SDLC Quiz</h1>
        <div class="container horizontal-scrollable pb-5">
           <div class="row pb-5 flex-row flex-nowrap">
                {questions.map((question) => <div class="col">{question}</div>)}
            </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col d-grid">
              <Link href='/about' passHref>
                <a class="btn btn-dark p-3">Abandon</a>
              </Link>
            </div>
              <div class="col d-grid">
                <button type="button" class="btn btn-primary p-3">Complete</button>
              </div>
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