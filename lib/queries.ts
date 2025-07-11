export const getNewAppsQuery = `*[_type == "newApp"] | order(name asc) {
  _id,
  name,
  company,
  description,
  "slug": slug.current,
  iconType,
  price,
  tags,
  mainImage,
  ratings
}`

export const getNewAppQuery = `*[_type == "newApp" && _id == $id][0] {
  _id,
  name,
  company,
  description,
  "slug": slug.current,
  iconType,
  price,
  tags,
  overview,
  mainImage,
  screenshots,
  ratings,
  benefits[] {
    title,
    description,
    icon
  },
  features[] {
    title,
    description,
    icon
  },
  problemsSolved[] {
    title,
    description,
    icon,
    color
  },
  pricingFeatures
}`

export const getBlogPostQuery = `*[_type == "blogPost" && _id == $id][0] {
    _id,
    title,
    excerpt,
    image,
    date,
    readTime,
    category,
    content,
    "slug": slug.current
  }`;


export const getBlogPostsQuery = `*[_type == "blogPost"] | order(date desc) {
  _id,
  title,
  excerpt,
  image,
  date,
  readTime,
  category,
  content,
  "slug": slug.current
}`


export const fullIndustriesQuery = `*[_type == "fullIndustry"] {
  _id,
title,
description,
results,
  heroTitle,
  heroDescription,
  heroPrimaryButton,
  heroSecondaryButton,
  heroImage,
  heroImageCaption {
    title,
    subtitle
  },
  sectorsTitle,
  sectorsDescription,
  industrySectors[] {
    title,
    description,
    icon,
    useCases
  },
  caseStudiesTitle,
  caseStudiesDescription,
  caseStudies[] {
    industry,
    company,
    challenge,
    solution,
    results,
    image
  },
  caseStudiesButton
}`;

export const fullIndustryQuery = `*[_type == "fullIndustry" && _id == $id] {
  _id,
title,
description,
results,
  heroTitle,
  heroDescription,
  heroPrimaryButton,
  heroSecondaryButton,
  heroImage,
  heroImageCaption {
    title,
    subtitle
  },
  sectorsTitle,
  sectorsDescription,
  industrySectors[] {
    title,
    description,
    icon,
    useCases
  },
  caseStudiesTitle,
  caseStudiesDescription,
  caseStudies[] {
    industry,
    company,
    challenge,
    solution,
    results,
    image
  },
  caseStudiesButton
}`;



export const getFeaturedProductsQuery = `*[_type == "featuredProduct"] {
  _id,
  name,
  order,
  description,
  image,
  rating,
  category,
  iconType,
  company,
  content
}`;

export const getIndustriesQuery = `*[_type == "industry"] {
  icon,
  name,
  description,
  stats[] {
    label,
    value
  },
  caseStudy {
    title,
    description,
    results,
    video,
    dashboard
  }
}`;

export const getCategoriesQuery = `*[_type == "category"] {
  id,
  name,
  description,
  count,
  icon,
image
}`;

export const getEmbeddedAisQuery = `*[_type == "embeddedAICategory"] {
  icon,
  title,
  description,
  capabilities[] {
    name,
    description
  }
}`;

export const getFeaturesQuery = `*[_type == "feature"] {
        _id,
        title,
        description,
        icon,
        highlighted
      }`;

export const getAiAppsQuery = `*[_type == "aiApp"] {
  _id,
  name,
  img,
  company,
  description,
  iconType,
  category,
  price,
  ratings {
    usability,
    security,
    accuracy,
    latency
  },
  tags,
  screenshots,
  demoVideo,
  features[] {
    title,
    description,
    iconType
  },
  useCases[] {
    industry,
    title,
    description,
    benefits,
    metrics[] {
      label,
      value
    }
  },
  technicalSpecs {
    modelSize,
    apiLatency,
    supportedLanguages,
    frameworks,
    deployment
  },
  reviews[] {
    id,
    user,
    avatar,
    rating,
    comment,
    date,
    helpful,
    verified
  },
  pricing {
    plans[] {
      name,
      price,
      features,
      recommended
    }
  },
  documentation {
    overview,
    quickstart,
    apiReference
  }
}`;

export const getAiAppQuery = `*[_type == "aiApp" && _id == $id] {
  _id,
  name,
  img,
  company,
  description,
  iconType,
  category,
  price,
  ratings {
    usability,
    security,
    accuracy,
    latency
  },
  tags,
  screenshots,
  demoVideo,
  features[] {
    title,
    description,
    iconType
  },
  useCases[] {
    industry,
    title,
    description,
    benefits,
    metrics[] {
      label,
      value
    }
  },
  technicalSpecs {
    modelSize,
    apiLatency,
    supportedLanguages,
    frameworks,
    deployment
  },
  reviews[] {
    id,
    user,
    avatar,
    rating,
    comment,
    date,
    helpful,
    verified
  },
  pricing {
    plans[] {
      name,
      price,
      features,
      recommended
    }
  },
  documentation {
    overview,
    quickstart,
    apiReference
  }
}`;
