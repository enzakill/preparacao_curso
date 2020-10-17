import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import './styles.css';
import Menu from '../../Components/Menu'





export default function Logon(){
  const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
  return(
    <div className="Home-container" style={{width: '100%'}}>
      <Menu />
      <h1>Olá Leonardo, Faça sua nova postagem !!</h1>
      <link type="text/css" rel="stylesheet" href="build/jodit.es2018.min.css"/>
      <script type="text/javascript" src="build/jodit.es2018.min.js"></script>
      <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onChange={newContent => {}}
      />
    </div>
  );
}