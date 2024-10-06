import React from "react";

const Preview = ({ srcDoc }) => {
  return (
    <div className="h-screen">
      <h3 className="font-bold text-xl">output</h3>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder="0"
        className="border border-l"
      />
    </div>
  );
};

export default Preview;
