import { describe, it, expect } from 'vitest';
// @ts-ignore
import render from '../../render';
import HelloWorld from '../HelloWorld.vue';
import { screen } from '@testing-library/vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    render(HelloWorld, { props: { msg: 'This is a test' } });

    expect(screen.queryByText(/This is a test/)).not.toBeNull();
  });
});
