const createContainer = jest.fn((options = {}, component) => component );

const withTracker = jest.fn(Op => jest.fn(C => createContainer(Op, C)));

module.exports = { withTracker };