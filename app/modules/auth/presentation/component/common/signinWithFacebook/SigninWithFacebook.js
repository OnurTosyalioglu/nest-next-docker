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

const SigninWithFacebook = (props) => {  
	const { t } = useTranslation(['auth', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

SigninWithFacebook.props = props
SigninWithFacebook.defaultProps = defaultProps

export default SigninWithFacebook


