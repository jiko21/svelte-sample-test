import { render, fireEvent, screen } from '@testing-library/svelte';
import TodoForm from './component.svelte';

const dispatchMock = jest.fn();

jest.mock('svelte', () => {
  const origin = jest.requireActual('svelte');

  return {
    ...origin,
    createEventDispatcher: () => dispatchMock,
  };
});

describe('components/Input', () => {
  it('correctly render', () => {
    const component = render(TodoForm);
    expect(component.container).toMatchSnapshot();
  });

  it('change value and active button', () => {
    const component = render(TodoForm);
    const input: any = screen.getByTestId('todo-input');
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    expect(input.value).toBe('test');
    expect(component.container).toMatchSnapshot();
  });
});
