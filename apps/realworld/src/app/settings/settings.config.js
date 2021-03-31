import template from './settings.html';

function SettingsConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.settings', {
    url: '/settings',
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl',
    template,
    title: 'Settings',
    resolve: {
      auth: function (User) {
        return User.ensureAuthIs(true);
      },
    },
  });
}

export default SettingsConfig;
