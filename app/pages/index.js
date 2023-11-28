import { 
	Fragment, 
	useEffect,
	useState,
} from 'react'
import { 
	serverSideTranslations,
} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

import Main from '../modules/main/presentation/layout/main/Main'
import Layout from '../modules/index/presentation/layout/home/Home'

const Index = props => {
	const [meta, setMeta] = useState({
		title: '',
	})
  const { t } = useTranslation(['index', 'common'])

  useEffect(() => {})

  return (
    <Fragment>
			<Head>
				<title>
					{`${t('common:app')} - ${t(meta.title)}`}
				</title>
			</Head>

			<Main>
				<Layout/>
			</Main>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale,)),
    },
  }
}

export default Index


