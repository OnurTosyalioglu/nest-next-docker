import { 
	Fragment, 
	useEffect, 
	useState, 
} from 'react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Home = (props) => {  
	const { t } = useTranslation(['index', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

Home.props = props
Home.defaultProps = defaultProps

export default Home


