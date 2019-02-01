import Component from '@ember/component';
import { observer } from '@ember/object';
import UserInputMixin from 'portfolio/mixins/user-input-mixin';
import $ from 'jquery';

export default Component.extend(UserInputMixin, {

  // Set up
  didInsertElement()
  {
    // Store a reference to the anchor for expanding the navbar
    this.anchorReference = this.$('.anchor');
    this.navbarReference = this.$('.navbar');
    this.bodyReference = $('html');

    // Set the display of the class
    this.anchorReference.addClass('d-none');

    // Create a reference to the component for the jQuery event
    let self = this;

    // Handle scrolling
    $(window).scroll(function() {

      // Check if we're on the top of the page
      if (self.navbarReference.height() < self.bodyReference.scrollTop()) {

        // We're not on top of the page, so enable the anchor
        self.anchorReference.removeClass('d-none');

        if (self.navbarExpanded) {
          self.navbarReference.addClass('fixed-top ease-top');

          self.navbarReference.css('top', 0);
        }

        else {
          self.navbarReference.addClass('fixed-top');
          self.anchorReference.removeClass('ease-top');
          self.navbarReference.css('top', -self.navbarReference.height());
        }
      }

      else if (!self.navbarExpanded){

        // We are on top of the page, so remove the anchor
        self.anchorReference.addClass('d-none');
        self.navbarReference.removeClass('fixed-top ease-top');
        self.navbarReference.css('top', 0);
      }

      else if (self.bodyReference.scrollTop() === 0) {
        self.set('navbarExpanded', false);
      }
    });

    this.anchorReference.click(function() {
      self.set('navbarExpanded', !self.navbarExpanded);
    });
  },

  // Variables

  navbarExpanded: false,
  navbarLocked: true,

  // Observers

  navbarExpansionObserver: observer('navbarExpanded', function() {
    $(window).scroll();
  })
});
