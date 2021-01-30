const homeData = {
  hero: {
    alternate: false,
    images: {
      mobile: require("../../assets/home/mobile/create-and-share.jpg").default,
      tablet: require("../../assets/home/tablet/create-and-share.jpg").default,
      desktop: require("../../assets/home/desktop/create-and-share.jpg").default,
    },
    title: "Create and share your photo stories.",
    intro: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    button: {
      variation: "alt-white",
      text: "Get an invite",
      link: "/"
    }
  },
  propositions: [
    {
      id: 1,
      images: {
        mobile: require("../../assets/home/mobile/beautiful-stories.jpg").default,
        tablet: require("../../assets/home/tablet/beautiful-stories.jpg").default,
        desktop: require("../../assets/home/desktop/beautiful-stories.jpg").default,
      },
      alt: "A designer working on Photoshop",
      flipped: false,
      title: "Beautiful stories every time",
      body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      button: {
        variation: "alt-black",
        text: "View the stories",
        link: '/stories'
      }
    },
    {
      id: 2,
      images: {
        mobile: require("../../assets/home/mobile/designed-for-everyone.jpg").default,
        tablet: require("../../assets/home/tablet/designed-for-everyone.jpg").default,
        desktop: require("../../assets/home/desktop/designed-for-everyone.jpg").default,
      },
      alt: "A professional photographer looking through their camera screen",
      flipped: true,
      title: "Designed for everyone",
      body: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
      button: {
        variation: "alt-black",
        text: "View the stories",
        link: '/stories'
      }
    }
  ]
}

export default homeData