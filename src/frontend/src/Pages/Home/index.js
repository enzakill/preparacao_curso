import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import './styles.css';
import Menu from '../../Components/Menu'
import Swal from 'sweetalert2';





export default function Logon(){
  const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(content)
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
      onBlur={newContent => setContent(newContent)}
      />

      <button  onClick={() => handleSubmit()}>Realizar Post</button>
    </div>
  );
}