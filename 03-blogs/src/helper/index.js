export const getQueryStr = name => {
  return new URLSearchParams(window.location.search).get(name)
}

export const mappingPostData = posts => {
  return {
    id: posts.id,
    title: posts.title.rendered,
    author: posts.author_data,
    thumbnail: posts.featured_media_url,
    slug: posts.slug,
    authorId: posts.author,
    created: posts.date,
    description: posts.excerpt.rendered,
    categories: posts.categories,
    viewCount: posts.view_count
  }
}

export const mappingCategoryData = categories => {
  return {
    id: categories.id,
    slug: categories.slug,
    name: categories.name
  }
}

export const formatDescription = string => {
  const strLength = string.length
  const formattedStr = string.substring(3, strLength - 5)
  if (formattedStr.length > 100) {
    return formattedStr.substring(0, 115) + '...'
  }
  return formattedStr
}