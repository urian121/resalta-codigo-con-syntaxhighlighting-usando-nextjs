"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCopyToClipboard } from "usehooks-ts";

import { BsCopy } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

import "../styles/custom_SyntaxHighlighter.css";

function MyCoolCodeBlock({ language = "javascript", showLineNumbers = true }) {
  const [_, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const customStyle = {
    fontSize: "14px",
  };

  const handleCopy = async (text) => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Volver al estado original después de 2 segundos
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  };

  const code = `toast.success("¡La operación se realizó con éxito!", {
  duration: 4000,
  progress: true,
  position: "bottom-center",
  transition: "bounceIn",
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  sonido: true,
});
  `;

  return (
    <div className="code-container">
      <div className="code-header">
        <div className="carbon">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <span>JavaScript</span>
        </div>

        <button className="copy-button" onClick={() => handleCopy(code)}>
          {isCopied ? (
            <>
              <BiSolidLike /> &nbsp; Código copiado
            </>
          ) : (
            <>
              <BsCopy /> &nbsp; Copiar Código
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={dracula} showLineNumbers={showLineNumbers} customStyle={customStyle}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default MyCoolCodeBlock;