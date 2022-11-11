import React from 'react';

export default function Navbar({ user }) {
  // console.log(user, 'user navbar');
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">

        <div className="col-sm-6">
          <a className="navbar-brand" href="/">HuntFlow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className="col-6">
          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              { !user ? (
                <>
                  <li className="nav-item col-sm-3">
                    <a className="nav-link" href="/reg">Регистрация</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth">Авторизация</a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item col-sm-3">
                    <a className="nav-link" href="/addCard">Добавить кандидата</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Выход</a>
                  </li>
                </>
              ) }

            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
}
