import { GenreService } from '@/services/genre/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menu.interface'
import { getGenreUrl } from 'configs/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	)

	return queryData
}
