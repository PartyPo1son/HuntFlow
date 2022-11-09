import React from 'react';

function Reg() {
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/login/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  };

  return (
    <div>
      <h1>Регистрация нового пользователя</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
          <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Электронный адрес</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Reg;
