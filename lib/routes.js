Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() {
  this.route('forms', {path: '/'});
  this.route('finishPage', {path: '/finishPage'});

});
