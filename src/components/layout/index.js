import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  );
}
