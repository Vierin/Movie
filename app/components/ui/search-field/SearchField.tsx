import { FC } from 'react'
import styles from './SearchField.module.scss'
import MaterialIcon from '../MaterialIcon'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
