import icon from "./Assets/images/icon.png";

function Header() {
  return (
    <>
      <h2>
        To-Do List <img src={icon} alt="icon" />
      </h2>
    </>
  );
}

export default Header;
