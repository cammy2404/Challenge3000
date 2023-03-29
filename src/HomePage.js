import { Link } from "react-router-dom";
import { mainMenu } from "./App/Content/contentLinks";

function HomePage() {

  const menuItems = mainMenu.slice(1);

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h1>Find out more about Challenge3000 in aid of SAMH!</h1>
        {menuItems.map(menuItem => (
          <h2><Link to={menuItem.link} className="highlight">{menuItem.displayText}</Link></h2>
        ))}
      </div>
    </>
  )
}

export default HomePage;
