import subComponentStyles from "app/styles/layout/subComponentStyles.module.css";
import { ReactComponent as Xmark } from "app/assets/xmark.svg";
import { ReactComponent as Hamburger } from "app/assets/hamburger.svg";
import { ReactComponent as Pencil } from "app/assets/pencil.svg";
import { ReactComponent as DisplayPic } from "app/assets/dp.svg";

import { ReactComponent as BookMarked } from "app/assets/bookmark-solid.svg";
import { ReactComponent as Profile } from "app/assets/dp-dark.svg";
import { ReactComponent as Explore } from "app/assets/explore.svg";
import { ReactComponent as Feed } from "app/assets/home.svg";

import { ReactComponent as Logout } from "app/assets/logout.svg";

import Logo from "app/assets/logoSm.png";
import { useState } from "react";
export const Header = ({
  isMenu,
  setMenu,
  className,
}: {
  isMenu: Boolean;
  setMenu: (a: Boolean) => void;
  className?: string;
}) => {
  return (
    <header className={`${className ?? ""}`}>
      <button
        className={subComponentStyles.menu}
        onClick={() => setMenu(!isMenu)}
      >
        {isMenu ? <Xmark /> : <Hamburger />}
      </button>
      <h1>
        <figure className={subComponentStyles.heroImgContainer}>
          <img src={Logo} alt="Demo" />
        </figure>
      </h1>
    </header>
  );
};

export const Nav = ({
  isMenu,
  className,
}: {
  isMenu: Boolean;
  className?: String;
}) => {
  return (
    <nav
      className={`${className ?? ""} ${isMenu ? "show" : ""} ${
        subComponentStyles.nav
      }`}
    >
      <ul>
        <li>
          <Feed />
          <span>Feed</span>
        </li>
        <li>
          <Explore />
          <span>Explore</span>
        </li>
        <li>
          <BookMarked />
          <span>BookMarked</span>
        </li>
        <li>
          <Profile />
          <span>Profile</span>
        </li>
      </ul>
      <button>
        <Logout />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export const UserInfo = ({ className }: { className?: string }) => {
  return (
    <article className={`${className ?? ""} ${subComponentStyles.userInfo}`}>
      <DisplayPic className={subComponentStyles.displayPic} />
      <h2 className="name">User</h2>
      <small>@User_name</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab,
        nostrum mollitia tenetur magnam fuga unde explicabo
      </p>
      <ul className={subComponentStyles.skills}>
        <li>Skill</li>
        <li>Skill</li>
        <li>Skill</li>
        <li>Skill</li>
        <li>Skill</li>
        <li>Skill</li>
      </ul>
      <button className={subComponentStyles.edit}>
        <Pencil />
      </button>
    </article>
  );
};
