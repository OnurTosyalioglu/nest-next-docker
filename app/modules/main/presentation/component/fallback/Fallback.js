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

import { Spinner } from '@material-tailwind/react'

const Fallback = (props) => {  
	const { t } = useTranslation(['main', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={'flex flex wrap w-full h-full justify-center items-center'}>
				<Spinner className={''}/>
			</div>
		</Fragment>
}

Fallback.props = props
Fallback.defaultProps = defaultProps

export default Fallback


