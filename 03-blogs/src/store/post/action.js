import PostService from "../../services/post"
import { mappingPostData } from '../../helper'

//ACTION_TYPE
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST'
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR'
export const ACT_FETCH_ARTICLE_GENERAL = 'ACT_FETCH_ARTICLE_GENERAL'

//ACTION_SYNC
export const actFetchArticleLatest = items => {
	return {
		type: ACT_FETCH_ARTICLE_LATEST,
		payload: {
			items
		}
	}
}

export const actFetchArticlePopular = items => {
	return {
		type: ACT_FETCH_ARTICLE_POPULAR,
		payload: {
			items
		}
	}
}

export const actFetchArticleGeneral = (items,currentPage, totalPages) => {
	return {
		type: ACT_FETCH_ARTICLE_GENERAL,
		payload: {
			items,
			currentPage,
			totalPages
		}
	}
}


//ACTION_ASYNC
export const actFetchArticleLatestAsync = () => {
	return async dispatch => {
		const response = await PostService.getArticleLatest()
		const posts = response.data.map(mappingPostData)
		dispatch(actFetchArticleLatest(posts))
	}
}

export const actFetchArticlePopularAsync = () => {
	return async dispatch => {
		try {
			const response = await PostService.getArticlePopular()
			const posts = response.data.map(mappingPostData)
			dispatch(actFetchArticlePopular(posts))
		} catch (error) {

		}
	}
}

export const actFetchArticleGeneralAsync = ({
	page = 2,
	currentPage = 1,
} = { }) => {
	return async dispatch => {
		try {
			const response = await PostService.getArticleGeneral({
				page,
				currentPage
			})

			const totalPages = Number(response.headers['x-wp-totalpages'])

			const posts = response.data.map(mappingPostData)
			dispatch(actFetchArticleGeneral(posts, currentPage, totalPages))
		} catch (error) {

		}
	}
}