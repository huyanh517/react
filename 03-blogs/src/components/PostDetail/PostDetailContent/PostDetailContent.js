import React from 'react'
import { PostDetailComments } from './PostDetailComments'
import { PostDetailTags } from './PostDetailTags'
import { PostDetailTextEditor } from './PostDetailTextEditor'

export const PostDetailContent = () => {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
      </div>
      <div className="content-padding">
        {/* Post Detail rich text editor */}
          <PostDetailTextEditor />
        {/* End Post Detail rich text editor */}
        {/* Post Detail Tags */}
          <PostDetailTags />
        {/* End Post Detail Tags */}
        {/* Post Detail Comments */}
          <PostDetailComments />
        {/* End Post Detail Comments */}
      </div>
    </div>
  )
}
