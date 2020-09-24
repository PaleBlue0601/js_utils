$(document).ready(function () {
  //图片查看器
  function img_Zoom($img_box,$index_img) {
    $img_box.click(function () {
      let index = $(this).index()
      let img_url = $index_img.eq(index).attr('src')
      $(document.body).append(`
      <div class="pop-up">
        <div class="content">
          <div class="close" title="点击关闭">×</div>
          <img src="${img_url}" alt="">
        </div>
      </div>
    `)
      $('.close').click(function () {
        $('.pop-up').remove()
      })
    })
  }
  img_Zoom($('.js-zoom'),$('.js-zoom img'))
})