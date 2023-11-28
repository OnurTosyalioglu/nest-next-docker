echo "import React, { Fragment, useState, useCallback, useEffect } from 'react'

const $2 = (props) => {  
	
	useEffect(() => {})

	return {

	}
}

export default $2
" > ./modules/$1/presentation/context/$1.js

echo "import { createContext } from 'react'

const $2Context = createContext({})

export default $2Context
" > ./modules/$1/presentation/context/$1.context.js

echo "import React from 'react'
import use$2 from './$1'

const $2Provider = ({ children }) => {  
	const $1 = use$2()

	return <$2Context.Provider value={$1}>
			{ children }
		</$2Context.Provider>
}

export default $2Provider
" > ./modules/$1/presentation/context/$1.provider.js

echo "import { useContext } from 'react'
import $2Context from './$1.context'

const use$2 = () => useContext($2Context)

export default use$2
" > ./modules/$1/presentation/context/use.$1.js
