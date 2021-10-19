import { fireEvent, screen } from '@testing-library/dom';
import {render} from '@testing-library/svelte'

import Input from './component.svelte';

describe('components/Input', () => {
  describe('primary', () => {
    it('correctly render', () => {
      const component = render(Input);
      expect(component.container).toMatchSnapshot();
    });

    it('call function correctly', () => {
      render(Input, {
        testId: 'testId',
      });
      const input: any = screen.getByTestId('testId');
      fireEvent.change(input, {
        target: {
          value: 'test'
        }
      })
      expect(input.value).toBe('test');
    });
  });
})
