const surveyJson = {
  elements: [
    {
    name: "favoriteAnimal",
    title: "What's your favorite animal?",
    type: "dropdown",
    choices: [
      "Dog",
      "Cat",
      "Elephant"
    ]
  }, {
    name: "faceLick",
    title: "Do you like being licked in the face?",
    type: "dropdown",
    choices: [
      "Yes",
      "No"
    ],
    visibleIf: "{favoriteAnimal} = 'Dog'"
  }, {
    name: "dogWalk",
    title: "Where's the best place to walk a dog?",
    type: "dropdown",
    choices: [
      "A park",
      "Around the block",
      "At a mall"
    ],
    visibleIf: "{faceLick} = 'Yes'"
  }, {
    name: "catMeow",
    title: "Do you like being meowed at?",
    type: "dropdown",
    choices: [
      "Yes",
      "No"
    ],
    visibleIf: "{favoriteAnimal} = 'Cat'"
  }, {
    name: "catSound",
    title: "Do you have plenty of cat toys?",
    type: "dropdown",
    choices: [
      "Yes",
      "No"
    ],
    visibleIf: "{catMeow} = 'Yes'"
  }, {
    name: "elephantSound",
    title: "Do you like giant, loud animals?",
    type: "dropdown",
    choices: [
      "Yes",
      "No"
    ],
    visibleIf: "{favoriteAnimal} = 'Elephant'"
  }, {
    name: "elephantWalk",
    title: "Where's the best place to keep an elephant?",
    type: "dropdown",
    choices: [
      "Your Backyard",
      "The Circus",
      "The Zoo"
    ],
    visibleIf: "{elephantSound} = 'Yes'"
  },
],
  triggers: [
    {
      type: "",
      expression: "{favoriteAnimal} = 'Dog'",
      actions: [
        {
          type: "show",
          questions: ["{dogWalk}"]
        }
      ]
    }
  ]
};

export default surveyJson