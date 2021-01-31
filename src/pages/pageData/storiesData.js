import ROUTES from '../routes';

const storiesData = {
  hero: {
    alternate: true,
    images: {
      mobile: require("../../assets/stories/mobile/moon-of-appalacia.jpg").default,
      tablet: require("../../assets/stories/tablet/moon-of-appalacia.jpg").default,
      desktop: require("../../assets/stories/desktop/moon-of-appalacia.jpg").default,
      info: {
        alt: "Hazy full moon of Appalachia"
      }
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
  },
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
      date: "April 16th 2020",
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
      date: "April 14th 2020",
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
      date: "April 11th 2020",
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
      date: "April 9th 2020",
      title: "Architecturals",
      credit: "Samantha Brooke",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 5,
      images: {
        mobile: require("../../assets/stories/mobile/world-tour.jpg").default,
        desktop: require("../../assets/stories/desktop/world-tour.jpg").default,
        info: {
          alt: "Wonderful shot of a mountain overlooking a lake"
        }
      },
      date: "April 7th 2020",
      title: "World Tour 2019",
      credit: "Timothy Wagner",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 6,
      images: {
        mobile: require("../../assets/stories/mobile/unforeseen-corners.jpg").default,
        desktop: require("../../assets/stories/desktop/unforeseen-corners.jpg").default,
        info: {
          alt: "Amazing clouds over a lone tree with the sun shining through"
        }
      },
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      credit: "William Malcom",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 7,
      images: {
        mobile: require("../../assets/stories/mobile/king-on-africa.jpg").default,
        desktop: require("../../assets/stories/desktop/king-on-africa.jpg").default,
        info: {
          alt: "Up close shot of a lion"
        }
      },
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      credit: "Tim Hellenburg",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 8,
      images: {
        mobile: require("../../assets/stories/mobile/trip-to-nowhere.jpg").default,
        desktop: require("../../assets/stories/desktop/trip-to-nowhere.jpg").default,
        info: {
          alt: "Lone tree beside a lake with reflection showing"
        }
      },
      date: "March 21st 2020",
      title: "The Trip To Nowhere",
      credit: "Felicia Rourke",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 9,
      images: {
        mobile: require("../../assets/stories/mobile/rage-of-the-sea.jpg").default,
        desktop: require("../../assets/stories/desktop/rage-of-the-sea.jpg").default,
        info: {
          alt: "Waves rolling with sun setting behind"
        }
      },
      date: "March 19th 2020",
      title: "Rage Of The Sea",
      credit: "Mohammed Abdul",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 10,
      images: {
        mobile: require("../../assets/stories/mobile/running-free.jpg").default,
        desktop: require("../../assets/stories/desktop/running-free.jpg").default,
        info: {
          alt: "Horses running free with dust kicked up around them"
        }
      },
      date: "March 16th 2020",
      title: "Running Free",
      credit: "Michelle",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 11,
      images: {
        mobile: require("../../assets/stories/mobile/behind-the-waves.jpg").default,
        desktop: require("../../assets/stories/desktop/behind-the-waves.jpg").default,
        info: {
          alt: "Waves crashing violently"
        }
      },
      date: "March 11th 2020",
      title: "Behind the Waves",
      credit: "Lamarr Wilson",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 12,
      images: {
        mobile: require("../../assets/stories/mobile/calm-waters.jpg").default,
        desktop: require("../../assets/stories/desktop/calm-waters.jpg").default,
        info: {
          alt: "Calm still water with pinky sunset"
        }
      },
      date: "March 9th 2020",
      title: "Calm Waters",
      credit: "Samantha Brooke",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 13,
      images: {
        mobile: require("../../assets/stories/mobile/milky-way.jpg").default,
        desktop: require("../../assets/stories/desktop/milky-way.jpg").default,
        info: {
          alt: "Stunning shot of the Milky Way"
        }
      },
      date: "March 5th 2020",
      title: "The Milky Way",
      credit: "Benjamin Cruz",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 14,
      images: {
        mobile: require("../../assets/stories/mobile/dark-forest.jpg").default,
        desktop: require("../../assets/stories/desktop/dark-forest.jpg").default,
        info: {
          alt: "High, rocky snow covered mountains"
        }
      },
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      credit: "Mohammed Abdul",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 15,
      images: {
        mobile: require("../../assets/stories/mobile/somwarpet.jpg").default,
        desktop: require("../../assets/stories/desktop/somwarpet.jpg").default,
        info: {
          alt: "Depth of field shot of somwarpet flowers"
        }
      },
      date: "March 1st 2020",
      title: "Somwarpet's Beauty",
      credit: "Michelle",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
    {
      id: 16,
      images: {
        mobile: require("../../assets/stories/mobile/land-of-dreams.jpg").default,
        desktop: require("../../assets/stories/desktop/land-of-dreams.jpg").default,
        info: {
          alt: "Picturesque image of a church infront of a mountain with clouds"
        }
      },
      date: "February 25th 2020",
      title: "Land of Dreams",
      credit: "William Malcom",
      button: {
        text: "Read story",
        link: ROUTES.STORIES,
        variation: "alt-long"
      }
    },
  ]
}

export default storiesData