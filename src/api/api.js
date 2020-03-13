import axios from '@/libs/axios'

//推荐列表
export const queryRecommendList = () => axios.get('/recommendList')

export const movieWeekly = () => axios.get('/movie/weekly')