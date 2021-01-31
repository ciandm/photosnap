import ROUTES from '../routes';

const homeData = {
  hero: {
    alternate: false,
    images: {
      mobile: require("../../assets/home/mobile/create-and-share.jpg").default,
      tablet: require("../../assets/home/tablet/create-and-share.jpg").default,
      desktop: require("../../assets/home/desktop/create-and-share.jpg").default,
      info: {
        alt: "Man overlooking a beautiful lake with his camera"
      }
    },
    title: "Create and share your photo stories.",
    intro: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    button: {
      variation: "alt-white",
      text: "Get an invite",
      link: ROUTES.STORIES
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
        link: ROUTES.STORIES
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
        link: ROUTES.STORIES
      }
    }
  ],
  stories: [
    {
      id: 1,
      images: {
        mobile: require("../../assets/stories/mobile/mountains.jpg").default,
        desktop: require("../../assets/stories/desktop/mountains.jpg").default,
        info: {
          alt: "Beautiful shot of mountains"
        }
      },
      title: "The Mountains",
      credit: "John Appleseed",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 2,
      images: {
        mobile: require("../../assets/stories/mobile/cityscapes.jpg").default,
        desktop: require("../../assets/stories/desktop/cityscapes.jpg").default,
        info: {
          alt: "High viewpoint of sunset over a city"
        }
      },
      title: "Sunset Cityscapes",
      credit: "Benjamin Cruz",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 3,
      images: {
        mobile: require("../../assets/stories/mobile/18-days-voyage.jpg").default,
        desktop: require("../../assets/stories/desktop/18-days-voyage.jpg").default,
        info: {
          alt: "Silhouette of person walking with sunset in background"
        }
      },
      title: "18 Days Voyage",
      credit: "Alexei Borodin",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 4,
      images: {
        mobile: require("../../assets/stories/mobile/architecturals.jpg").default,
        desktop: require("../../assets/stories/desktop/architecturals.jpg").default,
        info: {
          alt: "Amazing architectural design on a building"
        }
      },
      title: "Architecturals",
      credit: "Samantha Brooke",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
  ],
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
    }
  ]
}

export default homeData