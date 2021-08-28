import React from 'react'
import { PostDetailHeader } from '../../components/PostDetail/PostDetailHeader'
import './post-detail.css'
import { PostDetailContent } from '../../components/PostDetail/PostDetailContent/PostDetailContent';
import { PostDetailSideBar } from '../../components/PostDetail/PostDetailSideBar/PostDetailSideBar';
import { useParams } from 'react-router';

export const PostDetailPage = () => {
  const params = useParams()

  console.log('params', params.slug)

  return (
    <main className="post-detail">
      <div className="spacing" />
      {/* Post Detail Head */}
        <PostDetailHeader />
      {/* End Post Detail Head */}
      <div className="spacing" />
      {/* Post Detail Wrapper Content */}
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            {/* Post Detail Content */}
              <PostDetailContent />
            {/* End Post Detail Content */}
            {/* Post Detail Sidebar */}
              <PostDetailSideBar />
            {/* End Post Detail Sidebar */}
          </div>
        </div>
      </div>
      {/* End Post Detail Wrapper Content */}
    </main>

  )
}
