import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';
// import tasks from './mocks/tasks';

import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([])
  const [isShowForm, setIsShowForm] = useState(false)
  const [strSearch, setStrSearch] = useState('')
  const [orderBy, setOrderBy] = useState('name')
  const [orderDir, setOrderDir] = useState('asc')
  const [itemSelected, setItemSelected] = useState(null)


  useEffect(() => {
    let initItemsFromStorage = JSON.parse(localStorage.getItem('task')) || []
    setItems(initItemsFromStorage)

  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(items));
  }, [items])

  function handleSubmit(item) {
    let id = null;

    let newItems = [...items]

    if (item.id !== '') { //edit
      newItems = reject(newItems, { id: item.id });
      id = item.id;
    } else { // add
      id = uuidv4();
    }

    setItems([
      ...newItems,
      {
        id: id,
        name: item.name,
        level: +item.level
      }
    ])

    setIsShowForm(false)
  }

  function handleEdit(item) {
    setItemSelected(item)
    setIsShowForm(true)
  }

  function handleDelete(id) {
    const newItems = [...items]

    remove(newItems, (item) => {
      return item.id === id;
    });

    setItems(newItems)

  }

  const handleSort = (orderBy, orderDir) => {
    setOrderBy(orderBy)
    setOrderDir(orderDir)
  }

  const handleToggleForm = () => {
    setIsShowForm(!isShowForm)
    setItemSelected(null)
  }

  function handleSearch(value) {
    setStrSearch(value)
  }

  console.log(strSearch)

  function closeForm() {
    setIsShowForm(false)
  }

  let elmForm = null;
  let itemsAfterFiltered = [];

  // Search
  itemsAfterFiltered = filter(items || [], item => {
    return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  });

  // Sort
  itemsAfterFiltered = funcOrderBy(items, [orderBy], [orderDir]);

  return (
    <div>
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}

      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control
        orderBy={orderBy}
        orderDir={orderDir}
        onClickSearchGo={handleSearch}
        onClickSort={handleSort}
        onClickAdd={handleToggleForm}
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}

      {/* FORM : START */}
      {isShowForm && <Form
                        itemSelected={itemSelected}
                        onClickSubmit={handleSubmit}
                        onClickCancel={closeForm}
      />}
      {/* FORM : END */}

      {/* LIST : START */}
      <List
        onClickEdit={handleEdit}
        onClickDelete={handleDelete}
        items={itemsAfterFiltered} />
      {/* LIST : END */}
    </div>
  );
}

export default App;
