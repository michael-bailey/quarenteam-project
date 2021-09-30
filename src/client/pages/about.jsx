import Link from 'next/link';

export default function AboutPage() {
	return (
		<>
			<h1 class="text-center">Eric</h1>

			<div class="d-flex justify-content-center">
				<div class="col-4 home-div">
					<div class="home-title">
						<h1>Quaranteam Quiz</h1>
					</div>
					<div class="text-center all-scores">
						<h6 class="scores">100%</h6>
						<h6 class="scores">83%</h6>
						<h6 class="scores">69%</h6>
						<h6 class="scores">44%</h6>
					</div>
				</div>
			</div>

			<div class="container">
        		<div class="row">
            		<div class="col-xs-12">
                		<div  class="text-center">
							<Link href='/' passHref>
                    			<a class="btn btn-warning home-btn">Log Out</a>
							</Link>
                    		<a class="btn btn-dark home-btn">Take Quiz</a>
                		</div>
            		</div>
        		</div>
    		</div>
		</>
	);
}
