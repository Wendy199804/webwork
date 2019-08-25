//图表------------------折线图
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {

    xAxis: {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', ''],
        show: false

    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [564, 123, 890, 564, 455, 200, 135, 667, 333, 526, 996],
        type: 'line',
        symbol: 'circle', //折线点设置为实心点
        symbolSize: 10, //折线点的大小
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = ["#ffffff", "#ff8800", "#ffffff",
                        "#ffffff", "#ffffff", "#ffffff", "#ffffff",
                        "#ffffff", "#ffffff", "#ffffff", "#ff8800"
                    ];
                    return colorList[params.dataIndex]
                },
                lineStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                color: '#55ff55',

            }
        },

    }],
    grid: [
        { bottom: '0%' },
        { top: '5%' }
    ],
    tooltip: {
        trigger: 'axis',
    }
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
//--------------------柱状图

var myChart = echarts.init(document.getElementById('main2'));
var option = {
    xAxis: {
        type: 'category',
        data: ['', '', '', '', '', ''],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false,
        max: 10,
        min: 5.9
    },
    series: [{
        data: [6, 9, 8, 7, 6, 8],
        type: 'bar',
        color:'#A9D96C'
    }],
    grid: [
        { bottom: '0%' },
        { top: '8%' }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    }
};

myChart.setOption(option);


//______________________________________


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('walden', {
        "color": [
            "#85c9e3"
        ],
        "backgroundColor": "rgba(252,252,252,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#666666"
            },
            "subtextStyle": {
                "color": "#999999"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "1",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "1",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#e6a0d2",
                    "color0": "transparent",
                    "borderColor": "#e6a0d2",
                    "borderColor0": "#3fb1e3",
                    "borderWidth": "2"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "1",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#85c9e3"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(63,177,227)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(63,177,227)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#999999"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#626c91",
                "width": "1"
            },
            "itemStyle": {
                "normal": {
                    "color": "#626c91",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#626c91"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#3fb1e3",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#3fb1e3",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#3fb1e3",
                "borderColor": "rgba(63,177,227,0.15)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#2a99c9",
                "#afe8ff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(114,230,212,0.25)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        }
    });
}));
var myChart3 = echarts.init(document.getElementById('chart3'), 'walden');
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        max: 10000,
        minInterval: 2500,
    },

    // 分割线设置
    splitLine: {
        show: true, //显示分割线         
    },
    series: [{
        data: [2250, 4550, 7750, 5750, 10000, 9000, 8000, 7000],
        type: 'line',
        areaStyle: {}
    }],
    grid: [{
        bottom: '8%'
    },
    {
        top: '8%'
    }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        }
    }
};
myChart3.setOption(option);


//轮播图


        // 1.获取页面对应的元素
        var box = document.getElementById("box"); //最外部大盒子
        var arr = document.getElementById("arr");
        var screen = document.getElementsByClassName("screen")[0]; //轮播图显示区域div
        var ul = document.getElementsByClassName("screen-ul")[0]; //显示图片的ul
        var ol = document.getElementsByClassName("screen-ol")[0]; //显示页码的ol
        var left = document.getElementById("left"); //上一张箭头
        var right = document.getElementById("right"); //下一张箭头
        var index = 0; ////声明一个变量记录图片的索引，默认第0张图片

        //2.给box添加鼠标移入和移出事件
        //2.1 鼠标移入
        box.onmouseover = function () {
            arr.style.display = "block"; //显示上一页下一页箭头
            clearInterval(timeId); //清除定时器（即鼠标移入时，图片要停止自动轮播）
        };
        //2.2 鼠标移出
        box.onmouseout = function () {
            arr.style.display = "block"; //隐藏箭头
            timeId = setInterval(scroll, 2000);  //重启定时器（鼠标移出，图片要恢复自动轮播）
        };

        //3.给上一页下一页箭头添加点击事件
        //3.1 下一页，图片向左轮播
        right.onclick = function () {
            scroll();
        };
        //3.2 上一页，图片向右轮播
        left.onclick = function () {
            //(1)边界检测，如果当前已经是第一张，则不做任何处理
            if (index == 0) {
                //无限轮播原理：如果当前是第一张，则偷偷修改ul的位置是最后一张(第一张与最后一张是同一张图片)
                index = ul.children.length - 1; //index恢复到最后一张
                ul.style.left = -index * screen.offsetWidth + "px"; ////ul回到最后一张位置
            }
            //(2)索引自减
            index--;
            // (3)向左移动ul：目标距离 = -screen的宽度 * 索引
            animationMove(ul, -index * screen.offsetWidth, 6);
            indexShow(); //同步页码样式
        };

        //4.给页码添加点击事件
        for (var i = 0; i < ol.children.length; i++) {
            //4.1 循环遍历数组时给每一个页码添加一个liIndex属性记录下标
            ol.children[i].liIndex = i;
            ol.children[i].onclick = function () {
                index = this.liIndex - 1;
                scroll();
            };
        }

        var timeId = setInterval(scroll, 2000);
        // 封装一个向右轮播的函数
        function scroll() {
            //（1）边界检测：如果当前已经是最后一张(第n+1张,n代表需要轮播的图片数量)
            if (index == ul.children.length - 1) {
                //无限轮播的原理就是滚动到最后一张的时候，偷偷快速的改变ul的位置到第一张(不要任何动画，一瞬间改变)            
                index = 0; //index恢复到0
                ul.style.left = 0 + "px"; //ul回到初始位置
            }
            // (2)索引自增
            index++;
            // (3)向右移动ul：目标距离 = -screen的宽度 * 索引
            animationMove(ul, -index * screen.offsetWidth, 6);
            indexShow(); //同步页码样式6
        }
        //5.页码样式保持同步：排他思想(当前页码添加样式，其他页码移除该样式)
        function indexShow() {
            for (var i = 0; i < ol.children.length; i++) {
                if (i == index) {
                    ol.children[i].classList.add("current");
                } else {
                    ol.children[i].classList.remove("current");
                }
                //特殊情况：当index为最后一张的时候，页码应该显示第一张
                if (index == ul.children.length - 1) {
                    ol.children[0].classList.add("current");
                }
            }
        }
        // 封装一个滚动动画函数
        function animationMove(obj, target, speed) {
            clearInterval(obj.timeId);  //每次执行动画先清除原有的定时器
            obj.timeId = setInterval(function () {
                var currentLeft = obj.offsetLeft; //获取当前位置
                var isLeft = currentLeft > target ? true : false;   //是否往左走
                if (isLeft) {
                    currentLeft -= 6;    //往左走
                } else {
                    currentLeft += 6;    //往右走
                }
                if (isLeft ? currentLeft > target : currentLeft < target) {
                    obj.style.left = currentLeft + "px";  //如果当前位置不是在目标位置则进行位置处理
                } else {
                    clearInterval(obj.timeId);
                    obj.style.left = target + "px";
                }

            }, speed);
        }
///轮播图结束




    
