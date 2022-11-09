import React from 'react';

function Auth() {
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/login/auth', {
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
      <h1>Авторизация в системе</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Электронный адрес</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Авторизоваться</button>
      </form>
    </div>
  );
}

export default Auth;
