// src/CodeEditor.js
import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      <pre className="code-output">
        <code
          className="language-js"
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
        ></code>
        <h1>output</h1>
      </pre>
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        placeholder='Type here'
      />
    </div>
  );
};

export default CodeEditor;
