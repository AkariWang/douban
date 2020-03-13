import Mock from 'mockjs';
import {
  mockRecommend
} from '@/api/data'

const domain = 'https://douban.uieee.com//v2'

Mock.mock(`${domain}/recommendList`, mockRecommend)

export default Mock