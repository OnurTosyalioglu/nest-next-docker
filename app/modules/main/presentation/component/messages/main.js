import { 
	Fragment, 
	useEffect, 
	useState, 
	useEffect 
} from 'react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const main = (props) => {  
	const { t } = useTranslation(['', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

main.props = props
main.defaultProps = defaultProps

export default main


