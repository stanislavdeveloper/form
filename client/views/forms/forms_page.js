Template.forms.events({
  'click  .btnNext': function(e) {
   $('.tabs > .active').prev('li').find('a').trigger('click');

  }
});
Template.forms.events({
  'click  .accordion-toggle': function(e) {
    var self = e.target; 
    $(self).find('.indicator').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');

  }
});
Template.forms.events({
  'click  .indicator': function(e) {
    var self = e.target; 
    $(self).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');

  }
});
