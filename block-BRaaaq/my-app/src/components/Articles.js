import Artcile from "./Article";
import data from "../data";
console.log(data);
function Artciles() {
  return (
    <section className="articles padding">
      <div className="container">
        <h1 className="text-center secondary-heading">articles</h1>
        <div className="flex justify-between align-center flex-warp">
          {data.map((element, index) => (
            <Artcile key={index} {...element} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artciles;
