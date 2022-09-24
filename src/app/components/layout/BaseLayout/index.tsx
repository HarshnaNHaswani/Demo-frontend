import hero from "app/assets/hero.png";
import layoutStyles from "app/styles/layout/baseLayoutStyles.module.css";

import { useState } from "react";
import { Header, Nav, UserInfo } from "./SubComponents.1";
import { Search, ActionsBar, SuggestionsBox } from "./SubComponents.2";

export const BaseLayout = () => {
  const [isMenu, setMenu] = useState<Boolean>(false);
  return (
    <div className={layoutStyles.layout}>
      <Header
        isMenu={isMenu}
        setMenu={setMenu}
        className={layoutStyles.hero}
      ></Header>
      <UserInfo className={layoutStyles.user}></UserInfo>
      <Nav isMenu={isMenu} className={layoutStyles.nav}></Nav>
      <Search className={layoutStyles.search}></Search>
      <ActionsBar className={layoutStyles.actions}></ActionsBar>
      <SuggestionsBox
        className={layoutStyles.suggestions}
      ></SuggestionsBox>
      <main className={layoutStyles.main}></main>
    </div>
  );
};
