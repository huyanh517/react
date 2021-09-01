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
    shortDescHTML: posts.excerpt.rendered,
    categories: posts.categories,
    viewCount: posts.view_count,
    name: posts.name
  }
}

export const formatShortDescHTML = shortDescHTML => {
  let shortDesc = shortDescHTML
    .replace('<p>', '')
    .replace('</p>', '')
  
  let stringFormatted = shortDesc
    .split(' ')
    .slice(0, 20)
    .join(' ')
  
  if (stringFormatted !== shortDescHTML) {
    stringFormatted += '...'
  }

  return stringFormatted
}

export const handleHashCategoryById = categories => {
  const hashObj = { }

  categories.forEach(categoryItem => {
    const key = categoryItem.id
    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug
    }
  })

  return hashObj
}