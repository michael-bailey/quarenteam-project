import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';

export default function QuizPage() {
    const [questionNo, setQuestionNo] = useState(11);

    let questions = new Array(12).fill("what is the point?")
    questions = questions.map((text, index) => {
      return <Question number={index} text={text} select={() => {setQuestionNo(index)}} isSelected={index === questionNo}/>
    })
    
    return (
		<>
			<h1 class="text-center pt-5">Quiz Name</h1>
      <a class="text-center" href="/api/auth/logout">Logout</a>
        <div class="row p-5">
          <div class="col">
            {questions[questionNo === 0 ? questions.length - 1 : questionNo - 1]}
          </div>
            <div class="col">
              {questions[questionNo]}
            </div>
            <div class="col">
              {questions[(questionNo + 1) % questions.length]}
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
  const border = props.isSelected ? " border border-dark" : " border border-secondary"
  const shadow = props.isSelected ? " shadow-lg" : ""
  const text = props.isSelected ? "text-center" : "text-secondary text-center"

  return (
    <div class={"d-flex p-3 rounded rounded-3"+border+shadow} style={{height: "600px"}} onClick={props.select}>
      <div class="w-100 justify-content-center align-self-center">
        <h1 class={text}>{props.number + 1}.</h1>
        <p class={text}>{props.text}</p>
        <div class="d-grid gap-2">
          <button type="button" class={props.isSelected ? "btn btn-outline-primary p-3" : "btn btn-outline-secondary p-3"} disabled={!props.isSelected}>Option 1</button>
          <button type="button" class={props.isSelected ? "btn btn-outline-success p-3" : "btn btn-outline-secondary p-3"} disabled={!props.isSelected}>Option 2</button>
          <button type="button" class={props.isSelected ? "btn btn-outline-danger p-3": "btn btn-outline-secondary p-3"} disabled={!props.isSelected}>Option 3</button>
          <button type="button" class={props.isSelected ? "btn btn-outline-warning p-3": "btn btn-outline-secondary p-3"} disabled={!props.isSelected}>Option 4</button>
        </div>
      </div>
    </div>
  )
}