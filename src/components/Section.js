import Title from "./Title";

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6"></div>
    </section>
  );
}

export default Section;