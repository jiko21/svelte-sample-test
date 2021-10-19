import { fireEvent, screen } from '@testing-library/dom';
import {render} from '@testing-library/svelte'

import Button from './component.svelte';

describe('components/Button', () => {
  const onClickMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('primary', () => {
    it('correctly render', () => {
      const component = render(Button, {
        label: 'button',
      });
      expect(component.container).toMatchSnapshot();
      expect(screen.getByText('button')).toBeTruthy();
    });

    it('call function correctly', () => {
      const { component } = render(Button, {
        label: 'button',
      });

      component.$on('click', onClickMock);
      fireEvent.click(screen.getByText('button'));

      expect(onClickMock).toBeCalled();
    });
  });

  describe('danger', () => {
    it('correctly render', () => {
      const component = render(Button, {
        label: 'button',
        style: 'danger',
      });
      expect(component.container).toMatchSnapshot();
      expect(screen.getByText('button')).toBeTruthy();
    });

    it('call function correctly', () => {
      const { component } = render(Button, {
        label: 'button',
        style: 'danger',
      });

      component.$on('click', onClickMock);
      fireEvent.click(screen.getByText('button'));

      expect(onClickMock).toBeCalled();
    });
  });

  describe('disabled', () => {
    it('correctly render', () => {
      const component = render(Button, {
        label: 'button',
        disabled: true,
      });
      expect(component.container).toMatchSnapshot();
      expect(screen.getByText('button')).toBeTruthy();
    });
  });
})
