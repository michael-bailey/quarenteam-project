import Link from 'next/link';
import Header from '../components/header'
import { useUser } from '@auth0/nextjs-auth0';

export default function AboutPage() {
	const { user } = useUser();
	return (
		<>
			<Header user={user}/>
			<div class="row p-5">
          		<div class="col">
					<div class="d-grid gap-2">
          				<div id="score-1" class="text-center text-white p-3 home-score" >100%</div>
						<div id="score-2" class="text-center text-white p-3 home-score" >100%</div>
						<div id="score-3" class="text-center text-white p-3 home-score" >100%</div>
						<div id="score-4" class="text-center text-white p-3 home-score" >100%</div>		
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
