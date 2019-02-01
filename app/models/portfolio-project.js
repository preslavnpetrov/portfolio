import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  componentName: DS.attr('string'),
  description: DS.attr('string'),
  images: DS.attr(),
  discipline: DS.attr('number', {default: 0})
});
