import { useState } from 'react'
import ReactMarkdown from 'react-markdown';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [markdown,setMarkdown] = useState("## Markdown Previewer")
  return (
    <div className='container'>
     <div className="input">
      <h2>Editor</h2>
      
      <textarea value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
     </div>
     <div className="output">
      <h2>Previewer</h2>
      <div className="output-box">
      <ReactMarkdown>
        {markdown}

      </ReactMarkdown>
     
      </div>
     </div>
    </div>
  )
}

export default App
