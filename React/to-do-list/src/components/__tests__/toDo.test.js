// Jest knows this is the test file from the regex .test. 
import { render, screen, cleanup } from '@testing-library/react';

import Display from '../Display';
import Form from '../Form';

test('should render display and form components', () => {
    render(<Form />);
    const formElement = screen.getByTestId('todo-1');
    expect(formElement).toBeInTheDocument();
})