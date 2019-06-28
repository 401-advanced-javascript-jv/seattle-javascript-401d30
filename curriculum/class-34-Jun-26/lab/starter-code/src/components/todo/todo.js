import React from 'react';
import uuid from 'uuid/v4';
import Counter from '../counter/counter.js';
import { When } from '../if';

import './todo.scss';
import { AppContext } from '../context/context.js';
import Form from '../form/form.js';
import List from '../list/list.js';

class ToDo extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <>
        <section className="todo">
          <div>
            <Counter count={this.context.count} />
          </div>

          <div>
            <Form />
          </div>

          <div>
            <List />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
