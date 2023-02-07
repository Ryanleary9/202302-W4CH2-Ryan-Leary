import { Link } from "react-router-dom";
import { FormOption } from "../app/App";

type FormProps = {
  options: FormOption[];
};

export function Menu({ options }: FormProps) {
  return (
    <>
      {options.map((item) => (
        <span key={item.label}>
          <Link to={item.path}>{item.label}</Link>
        </span>
      ))}
    </>
  );
}
