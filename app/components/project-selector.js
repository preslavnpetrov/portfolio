import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed, observer } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

  userInput: inject(),

  initialized: false,

  didInsertElement()
  {

    // Store reference to the component
    let self = this;

    // Set the project to show
    this.set('_currentProject', this.get('projectsFiltered')[0]);

    $('.modal-container').click( function() {
      self.send('hideImage');
    });

    $('.previous-image').click( function(event) {
      self.send('goToPreviousImage');
      event.stopPropagation();
    });

    $('.next-image').click( function(event) {
      self.send('goToNextImage');
      event.stopPropagation();
    });

    // Save the number of project
    let projectsLength = this.get('projectsFiltered.length');

    $(document).ready(function(){
      $(".owl-carousel-small").addClass('owl-carousel');
      $(".owl-carousel-small").owlCarousel({
        items: projectsLength
      });

      $(".owl-carousel").owlCarousel();

      $(".project-viewer-current-media").on('mouseenter', function() {
        $(".image-carousel").fadeTo(250, 0.1);
      });

      $(".project-viewer-current-media").on('mouseleave', function() {
        $(".image-carousel").fadeTo(250, 1);
      });
    });

    this.set('initialized', true);
  },

  currentProject: computed('_currentProject', {
    get(key)
    {
      return this.get('_currentProject');
    },

    set(key, value)
    {
      // Store the reference to this
      let self = this;

      if (value !== this.get('_currentProject')) {

        $(".fadable").fadeOut(250, function() {

          $(".fadable").fadeIn(250);
          self.set('_currentProject', value);
        });
      }

      return self.get('_currentProject');
    }
  }),

  currentProjectIndex: computed('currentProject', function() {return this.projectsFiltered.indexOf(this.currentProject)}),
  currentPhotoURL: '',

  _currentProject: '',

  previousProjectAvailable: computed('currentProjectIndex', function() { return this.currentProjectIndex - 1 > -1 }),
  nextProjectAvailable: computed('currentProjectIndex', function() { return this.currentProjectIndex + 1 !== this.projectsFiltered.length }),

  currentImageIndex: computed('currentPhotoURL', 'currentProject.images', function()
  {
    return this.get('currentProject.images') ? this.get('currentProject.images').indexOf(this.get('currentPhotoURL')) : -1;
  }),

  previousImageAvailable: computed('currentImageIndex', function() { return this.get('currentImageIndex') - 1 > -1 }),
  nextImageAvailable: computed('currentImageIndex', function() { return this.currentProject.images && this.get('currentImageIndex') + 1 !== this.currentProject.images.length }),

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

      // Save the reference to this
      let self = this;

      if (self.get('currentPhotoURL') !== imageURL) {

        // Set the currently viewed photo url
        $(".project-viewer-current-media").fadeOut(250, function() {

          self.set('currentPhotoURL', imageURL);
          $(".project-viewer-current-media").fadeIn(250);
        });
      }
    },

    goToNext()
    {

      // Check if there is one
      if (!this.get('nextProjectAvailable'))
        return;

      // Set the current project to the next in the list
      this.set('currentProject', this.projectsFiltered[this.projectsFiltered.indexOf(this.currentProject) + 1]);
    },

    goToPrevious()
    {

      // Check if there is one
      if (!this.get('previousProjectAvailable'))
        return;

      // Set the current project to the previous in the list
      this.set('currentProject', this.projectsFiltered[this.projectsFiltered.indexOf(this.currentProject) - 1]);
    },

    goToNextImage()
    {

      // Check if there is one
      if (!this.get('nextImageAvailable'))
        return;

      // Set the current image to the next in the list
      this.send('selectImage', this.get('currentProject.images')[this.get('currentImageIndex') + 1]);
    },

    goToPreviousImage()
    {

      // Check if there is one
      if (!this.get('previousImageAvailable'))
        return;

        // Set the current image to the previous in the list
        this.send('selectImage', this.get('currentProject.images')[this.get('currentImageIndex') - 1]);
    },

    enlargeImage()
    {

      // Set image
      $('.modal-container').find('img').attr('src', this.get('currentPhotoURL'));

      // Show modal
      $('.modal-container').fadeIn(250);

      return false;
    },

    hideImage()
    {

      // Hide modal
      $('.modal-container').fadeOut(250);

      return false;

    }
  }
});
