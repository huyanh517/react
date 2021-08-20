import React from 'react';
import Search from './Search';
import Sort from './Sort';
import classNames from 'classnames';

function Control(props) {
  function handleAdd() {
    props.onClickAdd();
  }

  let { orderBy, orderDir, isShowForm, onClickSort, onClickSearchGo } = props;

  const classes = classNames('btn', 'btn-block', {
    'btn-success': isShowForm,
    'btn-info': !isShowForm
  })

  return (
    <div className="row">

      {/* SEARCH : START */}
      <Search onClickGo={onClickSearchGo} />
      {/* SEARCH : END */}

      {/* SORT : START */}
      <Sort
        onClickSort={onClickSort}
        orderBy={orderBy}
        orderDir={orderDir}
      />
      {/* SORT : END */}

      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          onClick={handleAdd}
          type="button"
          className={classes}
        >
          {isShowForm ? 'CLose Form' : 'Add Task'}
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
