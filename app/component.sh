# $1 component folder
# $2 component
# $3 locale file

mkdir -p $1

echo "import { 
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

const $2 = (props) => {  
	const { t } = useTranslation(['$3', ])
	const router = useRouter()

	useEffect(() => {})

	return <Fragment>
			<div className={''}>

			</div>
		</Fragment>
}

$2.props = props
$2.defaultProps = defaultProps

export default $2

" > $1/$2.js

echo "import propTypes from 'prop-types'

export default {

}
" > $1/props.js

echo "export default {

}
" > $1/props.default.js

echo "@media screen and (max-width: 600px) {

}

@media screen and (min-width: 600px) and (max-width: 900px){

}

@media screen and (min-width: 900px) and (max-width: 1200px){

}

@media screen and (min-width: 1200px) and (max-width: 1536px){

}

@media screen and (min-width: 1536px) {
	
}
" > $1/styles.module.css

