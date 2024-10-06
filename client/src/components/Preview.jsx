import React from "react";

const Preview = ({ srcDoc }) => {
  return (
    <div className="h-screen">
      <button className="px-4 py-2 bg-black text-white rounded-md mb-2">
        output
      </button>
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
