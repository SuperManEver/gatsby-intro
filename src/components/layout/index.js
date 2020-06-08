import React from "react";

import Header from "../header";

import css from "./styles.module.sass";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={css.wrapper}>{children}</main>
    </>
  );
}
