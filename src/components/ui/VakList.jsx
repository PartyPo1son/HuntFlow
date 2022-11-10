import React from 'react';

export default function VakList() {
  return (
    <div className="list-group">
      <h4>Мои вакансии</h4>
      <button type="button" className="list-group-item list-group-item-action">Информатик</button>
      <button type="button" className="list-group-item list-group-item-action">Разработчик</button>
      <button type="button" className="list-group-item list-group-item-action">Трудовик</button>
      <button type="button" className="list-group-item list-group-item-action">Президент</button>
      <button type="button" className="list-group-item list-group-item-action">ПР-менеджер</button>
      <button type="button" className="list-group-item list-group-item-action">Кладмен</button>
      <button type="button" className="list-group-item list-group-item-action">Повар</button>
    </div>
  );
}
