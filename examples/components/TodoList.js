import React, { PropTypes } from 'react';

export default class TodoList {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        {this.props.todos.map(todo =>
          <div key={todo.id}>{todo.text}</div>
        )}
      </div>
    );
  }
}
