//读取图片转成base64
export const getImageBase64 = (url, option = {}, callback) => {
  const {
    ext,
    width,
    height
  } = option
  var canvas = document.createElement("canvas"); //创建canvas DOM元素
  var ctx = canvas.getContext("2d");
  var img = new Image;
  img.crossOrigin = 'Anonymous';
  img.src = url;
  img.onload = function () {
    canvas.width = width; //指定画板的高度,自定义
    canvas.height = height; //指定画板的宽度，自定义
    ctx.drawImage(img, 0, 0, width, height); //将图片绘制到canvas中
    var dataURL = canvas.toDataURL("image/" + ext); //将canvas对象转换为base64编码，从而实现图片转为base64编码
    callback.call(this, dataURL); //回调函数获取Base64编码
    canvas = null;
  };
}