const pricingData = {
  hero: {
    alternate: false,
    images: {
      desktop: require('../../assets/pricing/desktop/hero.jpg').default,
      tablet: require('../../assets/pricing/tablet/hero.jpg').default,
      mobile: require('../../assets/pricing/mobile/hero.jpg').default,
      info: {
        alt: "Woman taking a beautiful picture of a sunset"
      }
    },
    title: "Pricing",
    intro: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
  },
  pricing: [
    {
      title: "Basic",
      body: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      cost: {
        monthly: "$19.00",
        yearly: "$99.00"
      }
    },
    {
      featured: true,
      title: "Pro",
      body: "More advanced features available. Recommended for photography veterans and professionals.",
      cost: {
        monthly: "$39.00",
        yearly: "$390.00"
      }
    },
    {
      title: "Business",
      body: "Additional features available such as more detailed metrics. Recommended for business owners.",
      cost: {
        monthly: "$99.00",
        yearly: "$990.00"
      }
    },
  ],
  comparison: [
    {
      id: 1,
      title: "Unlimited story posting",
      availability: {
        basic: true,
        pro: true,
        business: true
      }
    },
    {
      id: 2,
      title: "Unlimited photo upload",
      availability: {
        basic: true,
        pro: true,
        business: true
      }
    },
    {
      id: 3,
      title: "Embedded custom content",
      availability: {
        basic: false,
        pro: true,
        business: true
      }
    },
    {
      id: 4,
      title: "Customize metadata",
      availability: {
        basic: false,
        pro: true,
        business: true
      }
    },
    {
      id: 5,
      title: "Advanced metrics",
      availability: {
        basic: false,
        pro: false,
        business: true
      }
    },
    {
      id: 6,
      title: "Photo downloads",
      availability: {
        basic: false,
        pro: false,
        business: true
      }
    },
    {
      id: 7,
      title: "Search engine indexing",
      availability: {
        basic: false,
        pro: false,
        business: true
      }
    },
    {
      id: 8,
      title: "Custom analytics",
      availability: {
        basic: false,
        pro: false,
        business: true
      }
    },
  ]
}

export default pricingData;