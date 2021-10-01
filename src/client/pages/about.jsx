import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react';

export default function AboutPage() {
	const { user, error, isLoading } = useUser();
	
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>

	let dummyData = [26, 75, 94, 43, 89, 55, 24, 34, 34, 56, 78, 45, 23]

	const dummyTestResult = {
		correct: 12,
		totalQuestions: 12
	}

	calculatePercentage(dummyTestResult)

	function calculatePercentage(result) {
		const percentage = result.correct / result.totalQuestions * 100

		dummyData.push(percentage)
		dummyData.sort(function(a, b){return b-a});
	}

	useEffect(() => {
		fillResults(dummyData)
		function fillResults(data) {
			for (let i = 0; i < data.length; i++) {
				if (i < 4) {
					document.getElementById(`score-${i+1}`).innerHTML = dummyData[i] + "%"
				} else {
					const div = document.createElement("div");
					div.classList.add("text-center")
					div.classList.add("text-white")
					div.classList.add("p-3")
					div.classList.add("home-score")
					div.classList.add("score-black")
					div.innerHTML = data[i] + "%"
					document.getElementById("all-scores").appendChild(div)
				}
			}	
		}
	})

	return (
		<>
			<h1 class="text-center pt-5">{user.name}</h1>

			<h1 class="text-center pt-5">Quaranteam Quiz</h1>
			<a class="text-center" href="/api/auth/logout">Logout</a>
			<div class="row p-5">
          		<div class="col">
					<div id="all-scores" class="d-grid gap-2 overflow-auto">
          				<div id="score-1" class="text-center text-white p-3 home-score">N/A</div>
						<div id="score-2" class="text-center text-white p-3 home-score">N/A</div>
						<div id="score-3" class="text-center text-white p-3 home-score">N/A</div>
						<div id="score-4" class="text-center text-white p-3 home-score">N/A</div>
        			</div>
          		</div>
			</div>

			<div class="row px-5">
          		<div class="col d-grid">
				  	<Link href='/' passHref>
            			<a type="button" class="btn btn-warning p-3">Log Out</a>
					</Link>
          		</div>
          		<div class="col d-grid">
				  	<Link href='/quiz' passHref>
            			<a type="button" class="btn btn-dark p-3">Take Quiz</a>
					</Link>
          		</div>
        	</div>
		</>
	);
}
