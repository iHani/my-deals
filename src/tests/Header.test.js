var React = require('react');
var enzyme = require('enzyme');

const App = () => <div><h2>Welcome to React</h2>heya</div>

describe('<Header> test', () => {
  it('renders welcome message', () => {
    const wrapper = enzyme.shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(wrapper.contains(welcome)).toEqual(true);
  });
})
