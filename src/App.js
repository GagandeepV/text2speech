import React, { useState } from 'react'
import Speech from 'react-speech'
import style from './styles.json'
import './index.css'

function App() {
  const [Text, setText] = useState('')

  return (
    <>
      <h1>Text 2 Speech</h1>
      <div className="container">
        <textarea rows="4" cols="90" placeholder='Here....'
          value={Text} onChange={({ target: { value } }) => setText(value)}
        />
        <Speech
          styles={style}
          stop={true}
          pause={true}
          resume={true}
          text={Text}
        />
      </div>
    </>
  )
}

export default App;
