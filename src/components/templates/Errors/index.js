import useErrors from "../../../hooks/useErrors";
import Typography from "../../atoms/Typography";

const Errors = ({ errorCounter }) => {
  const { canvas } = useErrors(errorCounter);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {canvas}
      <Typography Element="h3">Error counter: {errorCounter}</Typography>
    </div>
  );
};

export default Errors;
