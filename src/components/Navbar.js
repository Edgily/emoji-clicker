export const Navbar = (props) => {
  const { addEmoji, level, emojis, length } = props;

  return (
    <div className="Navbar">
      <div className="container">
        <h1 className="title">Emoji Clicker</h1>

        <p className="description">
          Click the button and see how many emojis you can get!
        </p>
      </div>
      <div className="buttons">
        <button className="button" onClick={addEmoji}>
          Emoji!
        </button>
        <h2>{level}</h2>

        <h2>Emojis: {length}</h2>
      </div>
    </div>
  );
};
