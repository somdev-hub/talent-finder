import Navbar from "../Navbar";
import Footer from "../Footer";
import FooterSm from "../FooterSm";
import PropType from "prop-types";

/**
 * Layout component
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @param {string} props.color - The color of the navbar.
 * @returns {JSX.Element} - The rendered component.
 */

const Layout = ({ children, color }) => {
  return (
    <div>
      <div className="">
        <Navbar color={color} />
        <div className="">{children}</div>
        <Footer />
        <FooterSm />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropType.element.isRequired,
  color: PropType.string
};

export default Layout;
