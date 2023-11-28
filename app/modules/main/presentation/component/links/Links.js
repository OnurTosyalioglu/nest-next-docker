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

const Links = (props) => {  
	const { t } = useTranslation(['main', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

Links.props = props
Links.defaultProps = defaultProps

export default Links


