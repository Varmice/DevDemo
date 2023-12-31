// components/test3/test3.js
Component({
    options:{
        pureDataPattern:/^_/
    },

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        _rgb:{
            r:0,
            g:0,
            b:0
        },
        fullColor:'0,0,0',
        imgSrc:'https://i.postimg.cc/0jrXxS5R/a0a10e6a850700340fa0713cc9ba1d0c44554575-jpg-1295w.webp'

    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeR(){
            this.setData({
                '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
            })
        },
        changeG(){
            this.setData({
                '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            })
        },
        changeB(){
            this.setData({
                '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            })
        }

    },
    observers:{
        '_rgb.r,_rgb.g,_rgb.b': function(r,g,b){
            this.setData({
                fullColor:`${r},${g},${b}`
            })
        }
    }
})