const Form = ({ children, ...props }) => {
  return (
    <form
      className="flex justify-center items-center"
      style={{ border: "1px solid red" }}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
