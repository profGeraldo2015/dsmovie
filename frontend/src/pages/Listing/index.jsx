
import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import axios from 'axios';
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from 'react';
import { MoviePage } from "types/movie";

function Listing(){


	const [pageNumber, setPageNumber] = useState(0);

	useEffect( ()=>{
		axios.get(`${BASE_URL}/movies?size=10&page=3`)
		.then(response =>{
			
			const data = response.data;
			
			setPageNumber(data.number);
			
			console.log(data);

		});

	}, [



	] );




	return(
		<>
		<p>{pageNumber}</p>
		<Pagination />


		<div className="container">
		<div className="row">
		<div className="col-sm-6 col-jg-4 col-xl-3 mb-3">

		<MovieCard />
		
		</div>
		<div className="col-sm-6 col-jg-4 col-xl-3 mb-3">

		<MovieCard />
		
		</div>
		<div className="col-sm-6 col-jg-4 col-xl-3 mb-3">

		<MovieCard />
		
		</div>
		<div className="col-sm-6 col-jg-4 col-xl-3 mb-3">

		<MovieCard />
		
		</div>

		<div className="col-sm-6 col-jg-4 col-xl-3 mb-3">

		<MovieCard />
		
		</div>
		</div>
		</div>






		</>		
		)
}

export default Listing;
