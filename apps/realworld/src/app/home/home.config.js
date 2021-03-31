import template from './home.html';

function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    template,
    title: 'Home',
  });
}

export default HomeConfig;
