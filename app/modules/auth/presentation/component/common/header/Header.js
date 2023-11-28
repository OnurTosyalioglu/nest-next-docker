import { 
	Fragment, 
	useEffect, 
	useState, 
} from 'react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'
import Image from 'next/future/image'
import Link from 'next/link'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Header = (props) => {  
	const { t } = useTranslation(['auth', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

Header.props = props
Header.defaultProps = defaultProps

export default Header


