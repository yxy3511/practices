/*
1、元素外层要有player-main元素包裹
start-length
end-length
start-top
*/
;(function(global) {
    "use strict";
    var MyPlugin = function(options) {

    };

    MyPlugin.prototype = {
        init: function(els) {
            this.els = els
            window.addEventListener('scroll', ()=>{
              this.initScroll()
            })
        },
        initScroll: function() {
        // let els = document.getElementsByClassName('player-video')
        for(let el of this.els){
          let start = $(el).attr('start-length')
          let end = $(el).attr('end-length')
          if(this.isScrollView(el)){
            this.setScroll(el,start,end)
          }else{
            let pele = $(el).parent('.player-main')
            let curTop = document.documentElement.scrollTop || document.body.scrollTop
            let offset = curTop - $(el).attr('scrollTop')
            if(pele.css('position') == 'sticky'){
              pele.css('position', 'relative')
              // let endTop = $(el).attr('end-top')
              // pele.css('top', offset > 0 ? endTop + 'px' : 0)
              pele.css('top', offset > 0 ? curTop-$(el).offset().top + 'px' : 0)
            }
            if(offset > 0){
              el.currentTime = el.duration
            }else{
              el.currentTime = 0
            }
          }
        }
      },
      isScrollView: function(el) {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        let start = +$(el).attr('start-length')
        let end = +$(el).attr('end-length')
        return top  < end && top > start
      },
      setScroll: function(el, min, max) {
        let id = $(el).attr('id')
        let allTime = el.duration
        let curTop = document.documentElement.scrollTop || document.body.scrollTop
        let pele = $(el).parent('.player-main')
        let perLentToTime = allTime / (max-min)
        let scrollTop = $(el).attr('scrollTop') || curTop
        $(el).attr('scrollTop', scrollTop) // 记录上一次滚轴位置
        this.offsettop = curTop - $(el).attr('scrollTop') || 0
        if(curTop > min && curTop < max){
          if(pele.css('position') != 'sticky' && min){
            pele.css('position', 'sticky')
            let startLen = $(el).attr('start-top') || 0
            pele.css('top', startLen+'px')
          }
          el.currentTime = el.currentTime + perLentToTime * this.offsettop || 0
        }
        $(el).attr('scrollTop', curTop)
      }
    };
    if (typeof module !== 'undefined' && module.exports) module.exports = MyPlugin;
    if (typeof define === 'function') define(function() { return MyPlugin; });
    global.MyPlugin = MyPlugin;

})(this);