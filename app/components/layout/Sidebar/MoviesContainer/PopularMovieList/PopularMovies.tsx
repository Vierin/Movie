import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { MovieService } from '@/services/movie/movie.service'
import { FC } from 'react'
import { useQuery } from 'react-query'
import MovieList from '../MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular movies"
		/>
	)
}

export default PopularMovies
