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

const Member = (props) => {  
	const { t } = useTranslation(['main', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

Member.props = props
Member.defaultProps = defaultProps

export default Member


