define('@weex-component/x', function (require, exports, module) {

;
  var stream = require('@weex-module/stream');
    
module.exports = {
    data: function () {return {
      content: 'lorem',
      intervalValue:"1000",
      isShowIndicators:"true",
      isAutoPlay:"true",
      itemList: [
        {title: 'Java', pictureUrl: 'http://t.cn/RGE3uo9'},
        {title: 'Objective C', pictureUrl: 'http://t.cn/RGE31hq'},
        {title: 'JavaScript', pictureUrl: 'http://t.cn/RGE3AJt'}
      ]
    }},
    methods: {
      goWeexSite: function () {
        this.$openURL('http://alibaba.github.io/weex/')
      },
      update: function () {
        var self = this;
        stream.sendHttp({
          method: 'GET',
          url: 'http://old.75team.com/weekly/',
        }, function(ret) {
          alert(ret)
        });
      }
    }
}



;module.exports.style = {
  "cell": {
    "marginTop": 10,
    "marginLeft": 10,
    "flexDirection": "row"
  },
  "thumb": {
    "width": 200,
    "height": 200
  },
  "title": {
    "textAlign": "center",
    "flex": 1,
    "color": "#808080",
    "fontSize": 50
  },
  "slider": {
    "margin": 18,
    "width": 714,
    "height": 230
  },
  "slider-pages": {
    "flexDirection": "row",
    "width": 714,
    "height": 200
  }
}

;module.exports.template = {
  "type": "div",
  "style": {
    "flexDirection": "column"
  },
  "children": [
    {
      "type": "slider",
      "classList": [
        "slider"
      ],
      "attr": {
        "interval": function () {return this.intervalValue},
        "autoPlay": function () {return this.isAutoPlay}
      },
      "children": [
        {
          "type": "div",
          "classList": [
            "slider-pages"
          ],
          "repeat": function () {return this.itemList},
          "events": {
            "click": "goWeexSite"
          },
          "children": [
            {
              "type": "image",
              "classList": [
                "thumb"
              ],
              "attr": {
                "src": function () {return this.pictureUrl}
              }
            },
            {
              "type": "text",
              "classList": [
                "title"
              ],
              "attr": {
                "value": function () {return this.title}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "text",
      "events": {
        "click": "update"
      },
      "attr": {
        "value": function () {return this.content}
      }
    },
    {
      "type": "div",
      "classList": [
        "container"
      ],
      "events": {
        "click": "goWeexSite"
      },
      "children": [
        {
          "type": "div",
          "classList": [
            "cell"
          ],
          "children": [
            {
              "type": "image",
              "classList": [
                "thumb"
              ],
              "attr": {
                "src": "http://t.cn/RGE3AJt"
              }
            },
            {
              "type": "text",
              "classList": [
                "title"
              ],
              "attr": {
                "value": "JavaScript"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "cell"
          ],
          "children": [
            {
              "type": "image",
              "classList": [
                "thumb"
              ],
              "attr": {
                "src": "http://t.cn/RGE3uo9"
              }
            },
            {
              "type": "text",
              "classList": [
                "title"
              ],
              "attr": {
                "value": "Java"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "cell"
          ],
          "children": [
            {
              "type": "image",
              "classList": [
                "thumb"
              ],
              "attr": {
                "src": "http://t.cn/RGE31hq"
              }
            },
            {
              "type": "text",
              "classList": [
                "title"
              ],
              "attr": {
                "value": "Objective C"
              }
            }
          ]
        }
      ]
    }
  ]
}

;})

// require module
bootstrap('@weex-component/x', {"transformerVersion":"0.3.1"})