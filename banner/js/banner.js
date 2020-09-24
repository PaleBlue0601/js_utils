$(document).ready(function () {
  // 轮播图
  function banner (options) {
    //options.$swiper_List:移动的对象
    //options.num:不同类图片数量
    //options.a_Width:一个图片的宽度
    //options.$banner:轮播图div对象
    //options.$btn_left,$btn_right:按钮对象
    let {$swiper_List,num,a_Width,$banner,$btn_left,$btn_right} = options
    let index = 0 //当前移动下标
    //移动动画函数
    let banner_move = function () {
      if(index < 0) {
        $swiper_List.css({left: -num*a_Width})
        index = num-1
      } else if(index > num) { //移动到第三张图片时
        $swiper_List.css({left: 0})
        index = 1
      }
      let value = -index*a_Width
      $swiper_List.animate({ left:value+'' })
    }
    //定时器回调函数
    let timer_fn = function () {
      index++
      banner_move()
    }
    let timer = setInterval(timer_fn, 2000)
    $banner.mousemove(function () {
      // console.log("鼠标移入")
      clearInterval(timer) //移除定时器
    })
    $banner.mouseout(function () {
      // console.log("鼠标移出")
      timer = setInterval(timer_fn, 2000)
    })
    $btn_left.click(function () {
      index--
      banner_move()
    })
    $btn_right.click(function () {
      index++
      banner_move()
    })
  }
  //封装数据对象
  let options = {
    $swiper_List: $('.swiper-list'),
    num: 2,
    a_Width: 1100,
    $banner: $('.banner'),
    $btn_left: $('.left'),
    $btn_right: $('.right')
  }
  banner(options)
})


