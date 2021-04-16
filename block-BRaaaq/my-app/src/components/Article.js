import PropsTypes from "prop-types";

function Artcile(props) {
  return (
    <article className="flex-31 card">
      <div className="font-0">
        {console.log(typeof props.title)}
        <img src={props.urlToImage} alt="" className="img" />
      </div>
      <h3 className="ternary-heading">{props.title}</h3>
    </article>
  );
}

Artcile.propsTypes = {
  title: PropsTypes.string.isRequired,
  urlToImage: PropsTypes.string.isRequired,
};

export default Artcile;
