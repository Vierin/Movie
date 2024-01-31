import { FC } from 'react'
import { IMovie } from '@/shared/types/movie.types'
import styles from './SearchList.module.scss'
import Link from 'next/link'
import { getMovieUrl } from 'configs/url.config'
import Image from 'next/image'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<Image
							src={movie.poster}
							alt={movie.title}
							width={50}
							height={50}
							objectFit="cover"
							objectPosition="top"
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">No movies found</div>
			)}
		</div>
	)
}

export default SearchList
