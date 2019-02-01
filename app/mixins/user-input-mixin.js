import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Mixin.create({

  // Get reference to our inputs
  globals: inject('globals'),
  userInput: computed.alias('globals.userInput'),
});
