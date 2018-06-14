import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import createMemoryHistory from 'history/createMemoryHistory';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;

global.mockHistory = createMemoryHistory({
  initialEntries: [],
  keyLength: 0,
});

// Browser API mock
global.requestAnimationFrame = jest.fn();
global.dispatchEvent = jest.fn();
global.mutationObserverDisconnect = jest.fn()
global.MutationObserver = jest.fn().mockImplementation(cb => ({
  observe: (target) => { target.fireMutation = changes => cb(changes); },
  disconnect: mutationObserverDisconnect,
}));

Object.defineProperty(global.navigator, 'userAgent', {
  writable: true,
  value: 'chrome',
});

Object.defineProperty(global.navigator, 'appVersion', {
  writable: true,
  value: 'banana',
});
