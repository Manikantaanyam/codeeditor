import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import TextArea from "./TextArea";

const Editor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [tab, setTab] = useState("html");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="overflow-y-hidden">
      <div className="w-full  p-2 py-4 border border-b shadow-md pb-4">
        <h1 className="font-extrabold text-2xl pl-10">
          HTML, CSS, JS Compiler
        </h1>
      </div>
      <div className="w-[100vw] p-4 overflow-y-hidden grid grid-cols-2">
        <div>
          <div className="flex justify-between pb-2">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setTab("html");
                }}
                className={`bg-black rounded-md border  border-gray-300  px-4 py-2 text-black ${
                  tab === "html" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                html
              </button>
              <button
                onClick={() => {
                  setTab("css");
                }}
                className={`bg-black rounded-md border border-gray-300 px-4 py-2 text-black ${
                  tab === "css" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                css
              </button>
              <button
                onClick={() => {
                  setTab("js");
                }}
                className={`bg-black  rounded-md border border-gray-300 px-4 py-2 text-black ${
                  tab === "js" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                js
              </button>
            </div>
          </div>
          <div className="w-full h-screen bg-gray-300">
            <div>
              {tab === "html" && (
                <TextArea
                  value={html}
                  placeholder={"<h1> Welcome to code editor </h1>"}
                  onChange={(e) => setHtml(e.target.value)}
                />
              )}

              {tab === "css" && (
                <TextArea
                  value={css}
                  placeholder={`
h1{
   color:red;
}
                `}
                  onChange={(e) => setCss(e.target.value)}
                />
              )}

              {tab === "js" && (
                <TextArea
                  value={js}
                  placeholder={"console.log('anyam')"}
                  onChange={(e) => setJs(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="h-screen">
          <Preview srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
