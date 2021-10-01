import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/header'
import { useUser } from '@auth0/nextjs-auth0';


export default function QuizPage() {
    const data = getData()
    const { user } = useUser();
    const [answers, setAnswers] = useState(new Array(data.questions.length).fill(null));

    let questions = data.questions
    questions = questions.map((question, index) => {
      return <Question key={index} number={index} question={question} oldAnswer={answers[index]}
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

        <div class="row px-5">
          <div class="col d-grid">
            <Link href='/about' passHref>
              <a class="btn btn-dark p-3">Abandon</a>
            </Link>
          </div>
          <div class="col d-grid">
            <button type="button" class="btn btn-primary p-3" onClick={() => {
              let total = 0
              answers.forEach((answer,index) => {
                if (answer === data.correct_answers[index]) {
                  total += 1
                }
              })
              alert("You scored: " + total)
              window.location = '/about'
            }}>Complete</button>
          </div>

        </div>
		</>
	);
}

function Question(props) {
  const buttonTypes = ["primary", "success", "danger", "warning"]
  const [newAnswer, setNewAnswer] = useState(null)

  return (
    <div id="slide" class="d-flex p-3 rounded rounded-3 border border-dark shadow-custom question" style={{height: "700px"}}>
      <div class="w-100 justify-content-center align-self-center">
        <h1 class="text-center">{props.number + 1}.</h1>
        <p class="text-center">{props.question.question}</p>
        <div class="d-grid gap-2">
          {props.question.answers.map((answer, index) => {
            return <button key={answer.id} type="button" class={"btn p-3 btn-outline-" + buttonTypes[index] + ((newAnswer ?? props.oldAnswer) === answer.id ? " active" : "")} 
              onClick={() => {
                setNewAnswer(answer.id)
                props.setAnswer(answer.id)
              }}>{answer.answer}</button>
          })}
        </div>
      </div>
    </div>
  )
}

function getData() {
  return {
    "questions": [
        {
            "id": "q1",
            "question": "Which stage of the software development lifecycle (SDLC) would include the  following activities; Consideration of the potential risks involved in developing software, Determining whether the project outcome will be worth the costs involved.",
            "answers": [
                {
                    "id": "q1a1",
                    "answer": "Implementation / Deployment"
                },
                {
                    "id": "q1a2",
                    "answer": "Requirements Analysis"
                },
                {
                    "id": "q1a3",
                    "answer": "Testing"
                },
                {
                    "id": "q1a4",
                    "answer": "Feasibility Study"
                }
            ]
        },
        {
            "id": "q2",
            "question": "Which of the following is a purpose of the software development lifecycle (SDLC)?",
            "answers": [
                {
                    "id": "q2a1",
                    "answer": "To provide a suitable framework for planning a software development project"
                },
                {
                    "id": "q2a2",
                    "answer": "To provide a set of steps to create a software end-product"
                },
                {
                    "id": "q2a3",
                    "answer": "To create a methodology for developing software code"
                },
                {
                    "id": "q2a4",
                    "answer": "To provide a consistent set of coding standards"
                }
            ]
        },
        {
            "id": "q3",
            "question": "Which sequence puts the following stages in the SDLC in the CORRECT chronological order? a. testing, b. requirements analysis, c. maintenance, d. design",
            "answers": [
                {
                    "id": "q3a1",
                    "answer": "b, d, a, c"
                },
                {
                    "id": "q3a2",
                    "answer": "b, d, c, a"
                },
                {
                    "id": "q3a3",
                    "answer": "d, b, a, c"
                },
                {
                    "id": "q3a4",
                    "answer": "d, b, c, a"
                }
            ]
        },
        {
            "id": "q4",
            "question": "Which of the following is NOT an iterative methodology?",
            "answers": [
                {
                    "id": "q4a1",
                    "answer": "Waterfall"
                },
                {
                    "id": "q4a2",
                    "answer": "UP / RUP"
                },
                {
                    "id": "q4a3",
                    "answer": "Scrum"
                },
                {
                    "id": "q4a4",
                    "answer": "Spiral"
                }
            ]
        },
        {
            "id": "q5",
            "question": "Which software development method allows software to be deployed for client use  after each iteration?",
            "answers": [
                {
                    "id": "q5a1",
                    "answer": "Agile"
                },
                {
                    "id": "q5a2",
                    "answer": "Unified Process (UP)"
                },
                {
                    "id": "q5a3",
                    "answer": "V-Model"
                },
                {
                    "id": "q5a4",
                    "answer": "Waterfall"
                }
            ]
        },
        {
            "id": "q6",
            "question": "Which of the following is a role of a domain expert?",
            "answers": [
                {
                    "id": "q6a1",
                    "answer": "To provide insight into business products and processes"
                },
                {
                    "id": "q6a2",
                    "answer": "To specify functional requirements on behalf of the customer"
                },
                {
                    "id": "q6a3",
                    "answer": "To identify non-functional requirements"
                },
                {
                    "id": "q6a4",
                    "answer": "To assess project risks and constraints"
                }
            ]
        },
        {
            "id": "q7",
            "question": "A software application used by the general public has been found to have a security  weakness. The problem has been diagnosed and a development project initiated to  correct the security weakness. The project team will include security domain  experts. At which stages in the development will it be the MOST important to involve the  domain experts?",
            "answers": [
                {
                    "id": "q7a1",
                    "answer": "Feasibility study, code development"
                },
                {
                    "id": "q7a2",
                    "answer": "Design, testing"
                },
                {
                    "id": "q7a3",
                    "answer": "Requirements analysis, maintenance"
                },
                {
                    "id": "q7a4",
                    "answer": "Initiation, implementation / deployment"
                }
            ]
        },
        {
            "id": "q8",
            "question": "During the design stage of the SDLC, which of the following would be developed?",
            "answers": [
                {
                    "id": "q8a1",
                    "answer": "Software specification"
                },
                {
                    "id": "q8a2",
                    "answer": "Software code"
                },
                {
                    "id": "q8a3",
                    "answer": "Use cases"
                },
                {
                    "id": "q8a4",
                    "answer": "Test plans"
                }
            ]
        },
        {
            "id": "q9",
            "question": "Which of the following is a purpose of applying traceability and cross-referencing between software development deliverables?",
            "answers": [
                {
                    "id": "q9a1",
                    "answer": "To identify requirements which have not been met"
                },
                {
                    "id": "q9a2",
                    "answer": "To determine which deliverables might be affected by a change request"
                },
                {
                    "id": "q9a3",
                    "answer": "To assist in tracking project management issues"
                },
                {
                    "id": "q9a4",
                    "answer": "To ensure that deliverables are delivered in priority sequence"
                }
            ]
        },
        {
            "id": "q10",
            "question": "Interaction diagrams are a deliverable of which stage of the SDLC?",
            "answers": [
                {
                    "id": "q9a1",
                    "answer": "Design"
                },
                {
                    "id": "q9a2",
                    "answer": "Analysis"
                },
                {
                    "id": "q9a3",
                    "answer": "Code Development"
                },
                {
                    "id": "q9a4",
                    "answer": "Implementation (Deployment)"
                }
            ]
        },
        {
            "id": "q11",
            "question": "Which of the following factors would be a potential candidate reason for choosing an Agile method for a software development project?",
            "answers": [
                {
                    "id": "q11a1",
                    "answer": "The development project consists of a large distributed team"
                },
                {
                    "id": "q11a2",
                    "answer": "The customer has very few formally documented requirements"
                },
                {
                    "id": "q11a3",
                    "answer": "There are strict safety critical requirements"
                },
                {
                    "id": "q11a4",
                    "answer": "The customer has a range of complicated contractual commitments that are linked  to the planned development"
                }
            ]
        },
        {
            "id": "q12",
            "question": "Which of the following would be responsibilities of the product owner in a software  development project using an agile method of scrum? a. Prioritising items on the backlog, b. Accepting stories as done, c. Managing the execution stage of the project, d. Representing the customer to the Agile team",
            "answers": [
                {
                    "id": "q12a1",
                    "answer": "b, c and d only"
                },
                {
                    "id": "q12a2",
                    "answer": "a, b and d only"
                },
                {
                    "id": "q12a3",
                    "answer": "a, b and c only"
                },
                {
                    "id": "q12a4",
                    "answer": "a, c and d only"
                }
            ]
        },
        {
            "id": "q13",
            "question": "A company is developing application software for use by the general public using  the Scrum Methodology. Which of the following will NOT be a responsibility of the  Scrum Master?",
            "answers": [
                {
                    "id": "q13a1",
                    "answer": "Help the development team to achieve their goals"
                },
                {
                    "id": "q13a2",
                    "answer": "Remove impediments from the team"
                },
                {
                    "id": "q13a3",
                    "answer": "Shield the team from interruptions during the sprint"
                },
                {
                    "id": "q13a4",
                    "answer": "Lead the development team"
                }
            ]
        },
        {
            "id": "q14",
            "question": "Which of the following are objectives of the maintenance stage of the SDLC? a. Identify and fix bugs before software is implemented (deployed) so that they do  not cause operational failures, b. Adapt and modify the software as users' needs change through time after implementation (deployment), c. Complete any testing that could not be finished before implementation  (deployment), d. Fix bugs identified during live operation of the software.",
            "answers": [
                {
                    "id": "q14a1",
                    "answer": "a and b only"
                },
                {
                    "id": "q14a2",
                    "answer": "a and d only"
                },
                {
                    "id": "q14a3",
                    "answer": "b and c only"
                },
                {
                    "id": "q14a4",
                    "answer": "b and d only"
                }
            ]
        },
        {
            "id": "q15",
            "question": "Which of the following describes 'first-line support'?",
            "answers": [
                {
                    "id": "q15a1",
                    "answer": "Correcting bugs in operational software"
                },
                {
                    "id": "q15a2",
                    "answer": "Providing support to a software service in the first few weeks when it goes live"
                },
                {
                    "id": "q15a3",
                    "answer": "Providing support for the underlying infrastructure"
                },
                {
                    "id": "q15a4",
                    "answer": "Dealing with incidents in order to restore service as quickly as possible"
                }
            ]
        },
        {
            "id": "q16",
            "question": "Which of the following is a TRUE statement about the software development  lifecycle (SDLC)?",
            "answers": [
                {
                    "id": "q16a1",
                    "answer": "The SDLC should be used only with sequential development methodologies"
                },
                {
                    "id": "q16a2",
                    "answer": "The SDLC contains detailed instructions that should be followed to develop any IT  system"
                },
                {
                    "id": "q16a3",
                    "answer": "The SDLC can be used to solve any business problem"
                },
                {
                    "id": "q16a4",
                    "answer": "The SDLC is independent of the software development methodology used"
                }
            ]
        },
        {
            "id": "q17",
            "question": "Which statement describes the use of the V-Model software development method in  the software development lifecycle (SDLC)?",
            "answers": [
                {
                    "id": "q17a1",
                    "answer": "All seven stages of SDLC are performed for each iteration, with verification and  validation performed in the final stage"
                },
                {
                    "id": "q17a2",
                    "answer": "Each of the seven stages are performed iteratively before moving onto the next  stage with verification and validation performed in the testing stage"
                },
                {
                    "id": "q17a3",
                    "answer": "The first three stages are performed once then verified and validated. The following  four stages are iterative"
                },
                {
                    "id": "q17a4",
                    "answer": "Each stage of the SDLC has a corresponding verification and validation stage"
                }
            ]
        },
        {
            "id": "q18",
            "question": "A software development project is being initiated, and the project manager has set  the following broad objectives for the software development team [ Focus on the customers, Energise the team, Eliminate waste, Learn quickly, Keep improving ] Which of the following methodologies has a focus on eliminating waste?",
            "answers": [
                {
                    "id": "q18a1",
                    "answer": "Unified Process (UP)"
                },
                {
                    "id": "q18a2",
                    "answer": "Lean"
                },
                {
                    "id": "q18a3",
                    "answer": "Scrum"
                },
                {
                    "id": "q18a4",
                    "answer": "XP"
                }
            ]
        },
        {
            "id": "q19",
            "question": "A software development team includes application planners, software designers, coders, and technical architects and follows an agile approach to development. The  team is involved in testing, implementation (deployment) and maintenance of  software as needed.  Which of the following would be required by all the software development team members? a. communication skills, b. leadership skills, c. coding skills, d. shared responsibility ethos for the team's work",
            "answers": [
                {
                    "id": "q19a1",
                    "answer": "a and b only"
                },
                {
                    "id": "q19a2",
                    "answer": "a and c only"
                },
                {
                    "id": "q19a3",
                    "answer": "a and d only"
                },
                {
                    "id": "q19a4",
                    "answer": "b and c only"
                }
            ]
        },
        {
            "id": "q20",
            "question": "When using Agile methodologies, it is common to have daily and / or weekly  progress meetings. Which of the following questions SHOULD NOT be asked to team members during  these daily / weekly progress meetings?",
            "answers": [
                {
                    "id": "q20a1",
                    "answer": "Are there any impediments that prevent the team from meeting the goals of the  iteration?"
                },
                {
                    "id": "q20a2",
                    "answer": "What will you do next to help the team achieve the goals of the iteration?"
                },
                {
                    "id": "q20a3",
                    "answer": "What did you do over the last day / week to help the team achieve its goals of the  iteration?"
                },
                {
                    "id": "q20a4",
                    "answer": "Which team member is preventing the team from achieving the goals of the  iteration?"
                }
            ]
        },
        {
            "id": "q21",
            "question": "Which of the following would be used by a code developer?",
            "answers": [
                {
                    "id": "q21a1",
                    "answer": "Business case"
                },
                {
                    "id": "q21a2",
                    "answer": "Test strategy"
                },
                {
                    "id": "q21a3",
                    "answer": "Functional requirements specification"
                },
                {
                    "id": "q21a4",
                    "answer": "Technical design document"
                }
            ]
        },
        {
            "id": "q22",
            "question": "Software is being developed for a set of users who are only available to collaborate  during the analysis and acceptance testing parts of the project. They will also be  available to be trained on the new software before it goes live. Which of the following development approaches would be MOST appropriate given  the limited availability of the users?",
            "answers": [
                {
                    "id": "q22a1",
                    "answer": "Kanban"
                },
                {
                    "id": "q22a2",
                    "answer": "Extreme Programming (XP)"
                },
                {
                    "id": "q22a3",
                    "answer": "Sequential"
                },
                {
                    "id": "q22a4",
                    "answer": "Test Driven Development (TDD)"
                }
            ]
        },
        {
            "id": "q23",
            "question": "Which of the following is a (type of) functional requirement?",
            "answers": [
                {
                    "id": "q23a1",
                    "answer": "Supportability requirement"
                },
                {
                    "id": "q23a2",
                    "answer": "User interface requirement"
                },
                {
                    "id": "q23a3",
                    "answer": "Security requirement"
                },
                {
                    "id": "q23a4",
                    "answer": "Availability requirement"
                }
            ]
        },
        {
            "id": "q24",
            "question": "Which of the following are types of non-functional testing? a. load test, b. integration test, c. regression test, d. recovery test, e. scalability test",
            "answers": [
                {
                    "id": "q24a1",
                    "answer": "b, c and d only"
                },
                {
                    "id": "q24a2",
                    "answer": "a and e only"
                },
                {
                    "id": "q24a3",
                    "answer": "b and c only"
                },
                {
                    "id": "q24a4",
                    "answer": "a, d and e only"
                }
            ]
        }      
    ],
    "correct_answers":  [
        "q1a4",
       "q2a2",
        "q3a1",
        "q4a1",
        "q5a1",
        "q6a1",
        "q7a2",
        "q8a1",
        "q9a1",
        "q10a1",
        "q11a2",
        "q12a2",
        "q13a4",
        "q14a4",
        "q15a4",
        "q16a4",
        "q17a4",
        "q18a2",
        "q19a3",
        "q20a4",
       "q21a4",
        "q22a3",
        "q23a2",
        "q24a4"
    ]
}
}