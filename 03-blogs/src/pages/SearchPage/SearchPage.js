import React from 'react'
import { ArticleItem } from '../../components/ArticleItem/ArticleItem'
import { MainTitle } from '../../shared/MainTitle/MainTitle';
import { Button } from './../../shared/Button/Button';
import { getQueryStr } from './../../helper/index';

export const SearchPage = () => {

  let queryStr = getQueryStr('q')

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle type="search">4 Results found for "{queryStr}"</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
            />
          </div>

          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
            />
          </div>
        </div>

        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button
            type='primary'
            size='large'
            loading
          >
            Load more
          </Button>
        </div>
      </div>
    </div>

  )
}
