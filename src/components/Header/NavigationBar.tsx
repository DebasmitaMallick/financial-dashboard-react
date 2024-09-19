import { NavLink } from "react-router-dom";

const elements = ["Summary", "Charts", "Statistics", "Analysis", "Settings"];

const NavigationBar = () => {
  return (
    <div className="h-[43px] text-[18px] font-semibold mb-20 border-b-2 border-[#EFF1F3]">
      <ul className="flex justify-between items-center">
        {elements.map((element) => (
          <li key={element}>
            <NavLink
              to={element === "Charts" ? "" : element.toLowerCase()}
              className={({ isActive }) =>
                `${isActive ? "text-text-dark border-b-2 border-theme-blue" : "text-text-grey"} h-[43px] inline-block`
              }
            >
              {element}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
