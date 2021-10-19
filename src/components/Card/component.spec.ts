import {render} from '@testing-library/svelte'

import Card from './component.svelte';

describe('components/Card', () => {

  describe('disabled', () => {
    it('correctly render', () => {
      const component = render(Card);
      expect(component.container).toMatchSnapshot();
    });
  });
})
