const storiesData = {
  hero: {
    alternate: true,
    images: {
      mobile: require("../../assets/stories/mobile/moon-of-appalacia.jpg").default,
      tablet: require("../../assets/stories/tablet/moon-of-appalacia.jpg").default,
      desktop: require("../../assets/stories/desktop/moon-of-appalacia.jpg").default,
    },
    featured: "Last month's featured story",
    title: "Hazy full moon of Appalachia",
    credit: {
      date: "March 2nd 2020",
      photographer: "John Appleseed"
    },
    intro: `The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.`,
    button: {
      variation: "alt-white",
      text: "Read the story",
      link: "/"
    }
  }
}

export default storiesData