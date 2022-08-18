import {render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: "Study JS", completed: false, };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    // make assertions on this
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Study JS');

})