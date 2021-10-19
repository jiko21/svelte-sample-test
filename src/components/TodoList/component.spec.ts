import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/svelte';

import TodoList from './component.svelte';

const dispatchMock = jest.fn();

jest.mock('svelte', () => {
  const origin = jest.requireActual('svelte');

  return {
    ...origin,
    createEventDispatcher: () => dispatchMock,
  };
});

const LISTS = [
  {
    id: 0,
    content: 'test1test1',
  },
  {
    id: 1,
    content: 'test2test2',
  },
  {
    id: 2,
    content: 'test3test3',
  },
];

describe('components/TodoList', () => {
  beforeEach(() => jest.clearAllMocks());

  it('correctly render', () => {
    const component = render(TodoList, {
      lists: LISTS,
    });
    expect(component.container).toMatchSnapshot();
  });

  it('call function correctly', async () => {
    const removeMock = jest.fn();
    const { component, container } = render(TodoList, {
      lists: LISTS,
    });
    component.$on('remove', removeMock);

    await fireEvent.click(screen.getByTestId('remove-1'));

    expect(dispatchMock).toBeCalledWith('remove', {
      id: 1,
    });
  });
});
