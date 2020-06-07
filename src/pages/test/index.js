import React from "react";

import css from "./style.module.sass";

export default function TestPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>This is awesome test page!</h1>
    </div>
  );
}
