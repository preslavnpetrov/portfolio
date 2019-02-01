import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed, observer } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

  userInput: inject(),

  didInsertElement()
  {
    // Set the project to show
    this.set('currentProject', this.get('projectsFiltered')[0]);

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });
  },

  currentProject: '',
  currentProjectIndex: computed('currentProject', function() {return this.projectsFiltered.indexOf(this.currentProject)}),
  currentPhotoURL: '',

  previousProjectAvailable: computed('currentProjectIndex', function() { return this.currentProjectIndex - 1 > -1 }),
  nextProjectAvailable: computed('currentProjectIndex', function() { return this.currentProjectIndex + 1 !== this.projectsFiltered.length }),

  projectsFiltered: computed('userInput.discipline', 'projects', function() {
    return this.projects.filterBy('discipline', this.userInput.discipline);
  }),

  resetCurrentProject: observer('projectsFiltered.length', function() {

    // The projects filtered have changed, so set the current project to the first one available
    this.set('currentProject', this.get('projectsFiltered')[0]);
  }),

  resetCurrentPhotoURL: observer('currentProject', function() {

    // The project selected has changed, so show the first image
    this.set('currentPhotoURL', this.currentProject.images[0]);
  }),

  actions: {

    selectImage(imageURL) {

      // Set the currently viewed photo url
      this.set('currentPhotoURL', imageURL);
    },

    goToNext()
    {

      // Check if there is one
      if (this.nextProjectAvailable)
        return;

      // Set the current project to the next in the list
      this.set('currentProject', this.projectsFiltered[this.projectsFiltered.indexOf(this.currentProject) + 1]);
    },

    goToPrevious()
    {

      // Check if there is one
      if (this.previousProjectAvailable)
        return;

      // Set the current project to the next in the list
      this.set('currentProject', this.projectsFiltered[this.projectsFiltered.indexOf(this.currentProject) - 1]);
    }
  }
});
