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

import Navbar from '../../component/navbar/Navbar'

const Main = (props) => {  
	const { t } = useTranslation(['main', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={'flex flex-wrap'}>
				<Navbar/>

				{props.children}
			</div>
		</Fragment>
}

Main.props = props
Main.defaultProps = defaultProps

export default Main


