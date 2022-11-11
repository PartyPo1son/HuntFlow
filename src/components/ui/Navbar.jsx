import React from 'react';

export default function Navbar({ user }) {
  // console.log(user, 'user navbar');
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">HuntFlow</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <div className="navbar-nav">
              { !user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/reg">Регистрация</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth">Авторизация</a>
                  </li>
                </>
              ) : (
                <div>
                  <li className="nav-item">
                    <a className="nav-link" href="/addCard">Добавить кандидата</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Выход</a>
                  </li>
                </div>
              ) }
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
}
