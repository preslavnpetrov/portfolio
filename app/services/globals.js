import Service, { inject } from '@ember/service';
import { computed, observer } from '@ember/object';
// import $ from '@ember/jquery';

export default Service.extend({

  // Define all of our arrays and object on initialize (to avoid leaking state)
  init()
  {
    // Run the underlying logic
    this._super();

    // The string map of the disciplines
    this.disciplines = [
      'Games Design',
      'Level Design',
      'Games Development'
    ];

    // The color map of the disciplines
    this.disciplineColors = [
      'FF530D',
      'E80C7A',
      '7400FF'
    ];
  },

  /* --------------------------------
  Processors
  ---------------------------------*/

  // Change the color of the background when the discipline changes
  onDisciplineChange: observer('userInput.discipline', function() {
    $('body').get(0).style.setProperty("--backgroundColor", `#${this.disciplineColors[this.userInput.discipline]}`);
  }),

  // Stringified discipline
  disciplineFormatted: computed('userInput.discipline', function() {
    return this.get('disciplines')[this.get('userInput.discipline')];
  }),

  // Reference to userInput
  userInput: inject('user-input'),
});
