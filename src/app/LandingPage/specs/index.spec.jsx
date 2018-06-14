import React from 'react';
import LandingPage from '../index';

describe('LandingPage', () => {
  const defaultProps = {};

  const RendererComponent = props => renderer.create(<LandingPage {...props} />);

  describe('@render', () => {
    it('should render as expected', () => {
      const component = RendererComponent(defaultProps);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
