'use client'

import { FC } from 'react'
import Head from 'next/head'
import { iSeo } from './meta.interface'
import { usePathname } from 'next/navigation'
import { siteName, titleMerge } from 'configs/seo.config'
import { onlyText } from '../string/clearText'
import logoImage from '@/assets/images/logo.svg'

const Meta: FC<iSeo> = ({ title, description, image, children }) => {
	const pathname = usePathname()
	const currentUrl = `${process.env.APP_URL}${pathname}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							name="description"
							itemProp="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content={description} />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image || logoImage} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>

			{children}
		</>
	)
}

export default Meta
