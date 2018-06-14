import React from 'react';
import Page from '../index';

describe('Page', () => {
  const context = {history: mockHistory};
  context.history.push('/');

  const defaultProps = {
    location: context.history.location,
  };

  const RendererComponent = props =>
    shallow(
      <Page {...props}>
        <span>Children</span>
      </Page>,
      {
        lifecycleExperimental: true,
        context
      }
    );

  describe('@render', () => {
    it('should render as expected', () => {
      const component = RendererComponent(defaultProps);
      expect(component).toMatchSnapshot();
    });
  });

  describe('@lifecycle', () => {
    describe('componentDidUpdate()', () => {
      it('If location changes; scroll to 0,0', () => {
        jest.spyOn(global, 'scrollTo');
        const component = RendererComponent(defaultProps);

        component.setProps({location: context.history.location});
        expect(global.scrollTo).not.toHaveBeenCalled();

        context.history.replace('/foo');
        component.setProps({location: context.history.location});
        expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
      });
    });
  });
});
