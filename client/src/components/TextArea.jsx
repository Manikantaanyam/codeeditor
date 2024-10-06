const TextArea = ({ onChange, placeholder }) => {
  return (
    <div className="h-screen">
      <textarea
        onChange={onChange}
        spellCheck="false"
        id="message"
        rows="4"
        class="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg  border border-gray-200 focus:outline-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
