const featuresData = {
  hero: {
    alternate: false,
    images: {
      mobile: require("../../assets/features/mobile/hero.jpg").default,
      tablet: require("../../assets/features/tablet/hero.jpg").default,
      desktop: require("../../assets/features/desktop/hero.jpg").default,
    },
    title: "Features",
    intro: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
  },
  icons: [
    {
      id: 1,
      icon: require('../../assets/features/desktop/responsive.svg').default,
      alt: "Responsive icon",
      title: "100% Responsive",
      body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
    },
    {
      id: 2,
      icon: require('../../assets/features/desktop/no-limit.svg').default,
      alt: "Infinity icon",
      title: "No Photo Upload Limit",
      body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
    },
    {
      id: 3,
      icon: require('../../assets/features/desktop/embed.svg').default,
      alt: "Embed icon",
      title: "Available to Embed",
      body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
    },
    {
      id: 4,
      icon: require('../../assets/features/desktop/custom-domain.svg').default,
      alt: "Custom domain icon",
      title: "Custom Domain",
      body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
    },
    {
      id: 5,
      icon: require('../../assets/features/desktop/boost-exposure.svg').default,
      alt: "Exposure icon",
      title: "Boost Your Exposure",
      body: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
    },
    {
      id: 6,
      icon: require('../../assets/features/desktop/drag-drop.svg').default,
      alt: "Drag drop icon",
      title: "Drag & Drop Image",
      body: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
    }
  ]
}

export default featuresData