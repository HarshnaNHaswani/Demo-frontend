import subComponentStyles from "app/styles/layout/subComponentStyles.module.css";
import { ReactComponent as Chat } from "app/assets/chat.svg";
import { ReactComponent as Notif } from "app/assets/bell.svg";
import { ReactComponent as Add } from "app/assets/add.svg";
import { ReactComponent as SearchIcon } from "app/assets/search.svg";

import { Link } from "react-router-dom";

export const Search = ({ className }: { className?: String; }) => {
  return (
    <div className={`${className ?? ""} ${subComponentStyles.search}`}>
      <input type="search" name="search" id="" placeholder="search" />
      <SearchIcon />
    </div>
  );
};
export const SuggestionsBox = ({ className }: { className?: String; }) => {
  return (
    <section className={`${className ?? ""} ${subComponentStyles.suggestionsBox}`}>
      <article className={subComponentStyles.suggestion}>
        <span>Some name 00</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name 22</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name 44</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name 66</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name 88</span>
        <button>x</button>
      </article>
      <article className={subComponentStyles.suggestion}>
        <span>Some name</span>
        <button>x</button>
      </article>
    </section>
  );
};
export const ActionsBar = ({ className }: { className?: String; }) => {
  return (
    <div className={`${className ?? ''} ${subComponentStyles.actions}`}>
      <section className={subComponentStyles.icons}>
        <Link to="">
          <Notif />
        </Link>
        <Link to="">
          <Chat />
        </Link>
      </section>

      <button>
        <Add />
      </button>
    </div>
  );
};