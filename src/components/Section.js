import Title from "./Title";
import { NavLink } from "react-router-dom";

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded"}>
            <img src={item.image} />
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
}
export default Section;
