import Route from '@ember/routing/route';

export default Route.extend({

  model()
  {
    // Create the projects
    this.get('store').createRecord('portfolio-project', {
      name: "Kaiju Call",
      componentName: "kaiju-call",
      description: "Test Description",
      tags: ['In Development', 'Games Design', 'Games Development'],
      thumbnail: '/kaiju-call/thumbnail.png',
      images: [
        "kaiju-call/1.png",
        "kaiju-call/2.png",
        "kaiju-call/3.png",
        "kaiju-call/4.png",
        "kaiju-call/5.png",
      ],
      discipline: 0
    });

    this.get('store').createRecord('portfolio-project', {
      name: "ALIEN Panic!",
      componentName: "alien-panic",
      description: "Test Description",
      thumbnail: '/alien-panic/thumbnail.png',
      images: [
        "alien-panic/1.png",
        "alien-panic/2.png",
        "alien-panic/3.png",
      ],
      discipline: 0
    });

    this.get('store').createRecord('portfolio-project', {
      name: "Quantumnaut",
      componentName: "quantumnaut",
      description: "Test Description",
      thumbnail: '/quantumnaut/thumbnail.png',
      images: [
        "quantumnaut/1.png",
        "quantumnaut/2.png",
        "quantumnaut/3.png",
        "quantumnaut/4.png",
        "quantumnaut/5.png",
      ],
      discipline: 0
    });

    this.get('store').createRecord('portfolio-project', {
      name: "Code Name: Farrelli",
      componentName: "project-farrelli",
      description: "Test Description",
      thumbnail: '/project-farrelli/thumbnail.png',
      images: [
        "project-farrelli/1.png",
        "project-farrelli/2.png",
        "project-farrelli/3-1.png",
        "project-farrelli/3-2.png",
        "project-farrelli/3-3.png",
        "project-farrelli/4.png",
        "project-farrelli/5.png",
        "project-farrelli/6.png",
      ],
      discipline: 0
    });

    this.get('store').createRecord('portfolio-project', {
      name: "Phaseball",
      componentName: "phaseball",
      description: "Test Description",
      thumbnail: '/phaseball/thumbnail.png',
      images: [
        "phaseball/1.png",
        "phaseball/2.png",
        "phaseball/3.png",
      ],
      discipline: 0
    });

    // this.get('store').createRecord('portfolio-project', {
    //   name: "Novoslavia",
    //   componentName: "novoslavia",
    //   description: "Test Description",
    //   thumbnail: '/novoslavia/thumbnail.png',
    //   images: [
    //     "novoslavia/1.png",
    //     "novoslavia/2.png",
    //     "novoslavia/3.png",
    //   ],
    //   discipline: 0
    // });

    this.get('store').createRecord('portfolio-project', {
      name: "Hearthlight",
      componentName: "hearthlight",
      description: "Test Description",
      thumbnail: '/hearthlight/thumbnail.png',
      images: [
        "hearthlight/1.png",
        "hearthlight/2.png",
        "hearthlight/3.png",
        "hearthlight/4.png",
        "hearthlight/5.png",
      ],
      discipline: 0,
      tags: ['Game Jam', 'Games Design', 'Games Development']
    });

    return {
      projects: this.get('store').peekAll('portfolio-project')
    };
  }
});
