import React from 'react';

import './item-list.css';

const ItemList = (props) => {

  // swapiService = new SwapiService();

  const { data, onItemSelected, children: renderLabel } = props;

    /* 
    В вашем коде на git в компонете app.js вызывается следующий компонент и ему передается child в виде анонимной функции.

    <ItemList
        getData={getAllPeople}
        onItemSelected={() => {}}>

        { ({name}) => <span>{name}</span> }
    </ItemList>
    В item-list.js есть следующая строка:

    const { data, onItemSelected, children: renderLabel } = props;

    Объясните пожалуйста children: renderLabel это таким образом мы доступаемся к этой анонимной функции и присваиваем ей alias?

    Именно так, вы всё правильно поняли. В props есть свойство children. Мы можем написать

    const { children } = props;
    // всё равно что
    // const children = props.children

    Или можно написать так:

    const { children: renderLabel } = props;
    // всё равно что
    // const renderChildren = props.children
    Я использовал второй вариант, чтобы дать функции удобное имя. Название "children" довольно плохо передаёт, что именно должна делать функция.
    */
    
    const items = data.map((item) => {

      const label = renderLabel(item);
      const { id } = item;

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );

};

export default ItemList;

// Пример использования:
// const { getAllPeople } = new SwapiService();
// export default withData(ItemList, getAllPeople);


