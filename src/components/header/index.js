import React from "react";
import { Link } from "gatsby";

import css from "./styles.module.sass";

const Header = () => (
  <header className={css.wrapper}>
    <Link to="/" className={css.link}>
      FEM Workshop
    </Link>
    <nav>
      <Link className={css.link} to="/" activeClassName={css.currentPage}>
        Home
      </Link>
      <Link className={css.link} to="/about/" activeClassName={css.currentPage}>
        About
      </Link>
    </nav>
  </header>
);

export default Header;
