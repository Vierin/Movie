import { FC } from 'react'
import PopularMovies from './PopularMovieList/PopularMovies'
import FavoriteMovies from './FavoriteMovieList/FavoriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
