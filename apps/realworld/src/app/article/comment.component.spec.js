import articleModule from './index';

beforeEach(() => {
  // Create the module where our functionality can attach to
  angular.mock.module('ui.router');
  angular.mock.module(articleModule.name);
});

let component;

beforeEach(
  angular.mock.inject(($rootScope, $componentController) => {
    let User = {
      current: false,
    };
    component = $componentController('comment', { User });
  })
);

describe('comment component', () => {
  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should default canModify to false', () => {
    expect(component.canModify).toEqual(false);
  });
});
