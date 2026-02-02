import { PiArrowCircleLeft } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function GoBackBtn() {
  return (
    <NavLink
      to={-1}
      className="border cursor-pointer rounded-full bg-white p-1 w-fit"
    >
      <div className="flex-center bg-blue-light rounded-full px-3 py-1.5 gap-2">
        <PiArrowCircleLeft
          className="text-blue-header"
          style={{ fontSize: "25px" }}
        />
        <span className="capitalize text-blue-header text-sm font-semibold">
          Go back
        </span>
      </div>
    </NavLink>
  );
}

export default GoBackBtn;
