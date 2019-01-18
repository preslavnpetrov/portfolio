import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  globals: inject('globals'),

  userInput: computed.alias('globals.userInput'),
});
