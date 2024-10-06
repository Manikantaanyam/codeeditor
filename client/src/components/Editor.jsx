import React, { useState, useEffect } from "react";

const Editor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

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
    <div className="w-[100vw]  flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        <TextArea label={"Html"} onChange={(e) => setHtml(e.target.value)} />
        <TextArea label={"Css"} onChange={(e) => setCss(e.target.value)} />
        <TextArea label={"Js"} onChange={(e) => setJs(e.target.value)} />
      </div>
      <div className="mt-10">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="300px"
          style={{ border: "1px solid black" }}
        />
      </div>
    </div>
  );
};

const TextArea = ({ onChange, label }) => {
  return (
    <div className="h-[60vh]">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        onChange={onChange}
        id="message"
        rows="4"
        class="block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Editor;
