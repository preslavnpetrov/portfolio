import Route from '@ember/routing/route';

export default Route.extend({

  model()
  {
    // Create the projects
    this.get('store').createRecord('portfolio-project', {
      name: "Hearthlight",
      componentName: "hearthlight",
      description: "Test Description",
      images: [
        "https://ggj.s3.amazonaws.com/styles/feature_image__wide/games/screenshots/hearthlight01.png?itok=CBu5Y162&timestamp=1548611006",
        "https://ggj.s3.amazonaws.com/styles/feature_image__wide/games/screenshots/hearthlight02.png?itok=OMw9_0zi&timestamp=1548611006",
        "https://ggj.s3.amazonaws.com/styles/feature_image__wide/games/screenshots/hearthlight03.png?itok=wvIBJ_aq&timestamp=1548611006",
        "https://ggj.s3.amazonaws.com/styles/feature_image__wide/games/screenshots/unity_pnelug0kx7.png?itok=bSat5sRx&timestamp=1548611006"
      ],
      discipline: 0
    });

    return {
      projects: this.get('store').peekAll('portfolio-project')
    };
  }
});
