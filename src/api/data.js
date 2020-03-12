import Mock from 'mockjs';
let Random = Mock.Random;

//生成推荐列表数据
export const mockRecommend = () => {
  var data = { //定义等下要返回的json数据
    recommendList: []
  };
  var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => Random.image('100x100', Random.color(), Random.word(2, 6))); //随机成长3个图片信息 尺寸 颜色 和随机字母的数组
  for (var i = 0; i < 10; i++) {
    var content = Random.cparagraph(10, 500); //随机生成10到500段句子
    let rNumber = Random.integer(0, 9);
    data.recommendList.push({
      id: Random.id(), //固有id
      title: Random.cword(8, 20), //随机长度为在8到20内的汉字字符串
      content: content,
      tag: Random.cword(5, 12), //随机长度为2 到 6 的汉字
      views: Random.integer(100, 5000), //100到5000的随机整数
      profile: images.slice(rNumber, rNumber + 1), //截取随机一到三个图片
      time: Random.date(),
      userName:Random.cword(3,12)
    })
  }
  return data //返回json数据
}