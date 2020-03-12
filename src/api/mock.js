import Mock from 'mockjs';
import {
  mockRecommend
} from '@/api/data'

const domain = 'http://mockjs.com/api'

Mock.mock(`${domain}/recommendList`, mockRecommend)

export default Mock