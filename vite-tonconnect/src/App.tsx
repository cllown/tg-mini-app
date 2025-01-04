import { useState } from 'react'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'


function App() {
  const [count, setCount] = useState(0)

  return (
	<div className='header'>
	  <TonConnectButton/>
	</div>
  )
}

export default App