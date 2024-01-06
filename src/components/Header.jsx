/* eslint-disable react/prop-types */
import Search from './Search';

export default function Header({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container items-center">
        <h1 className="m-0 d-flex">
          <a className="navbar-brand" href="#">
            {title}
          </a>
        </h1>
        <div id="navbarScroll">
          <div className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></div>
          <Search />
        </div>
      </div>
    </nav>
  );
}
