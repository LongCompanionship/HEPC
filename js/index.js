// 柱状图1模块
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{ // 代表渐变色从正上方开始
                    offset: 0, // offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: '#e0f702',
                }, // 柱图渐变色
                {
                    offset: 1, // 指100%处的颜色
                    color: '#f9c802',
                },
            ],
        ),
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: ['米东区', '新市区', '头屯河区', '水磨沟区', '沙依巴可区', '天山区', '达坂城区', '乌鲁木齐县'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                rotate: 50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: '#fff',
                    fontSize: '10',
                },
            }, // x轴文字样式
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 0,
                    type: 'solid',
                },
            }, // 线的样式
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontSize: '10',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false, // y轴线的颜色
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'solid',
                }, // 后续如果要改，把false改为true然后调整下面的属性
            },
            splitLine: {
                lineStyle: {
                    color: '#4e8293',
                },
            }, // y轴分割线的颜色
        }],
        series: [{
            type: "bar",
            barWidth: "25%",
            data: [20, 30, 30, 90, 150, 120, 60, 12],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [{
            year: "检测机构数",
            data: [20, 30, 30, 90, 150, 120, 60, 12],
        },
        {
            year: "从业人员数",
            data: [30, 40, 35, 80, 180, 140, 70, 75]
        }
    ];

    document.querySelector(".bar h2").addEventListener("click", function (e) {
        var i = e.target == this.children[0] ? 0 : 1;
        option.series[0].data = dataAll[i].data;
        myChart.setOption(option);
    });
})();

// 柱状图2模块
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    let backgroundColor = 'rgba(128, 128, 128, 0.1)';
    var uploadCnt = [];
    var big = 1000;
    // 指定配置和数据
    var option = {
        tooltip: {
            formatter: params => {
                if (params.name !== '') {
                    return `${params.name} : ${getmyd[params.dataIndex]}`;
                }
            },
            textStyle: {
                align: 'left',
            },
        },
        grid: {
            left: '5%',
            right: '5px',
            bottom: '10%',
            top: '10%',
            // containLabel: true, // 防止标签溢出
        },
        xAxis: [{
            type: "value",
            data: ['米东区', '新市区', '头屯河区'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                color: '#ffffff',
                interval: 0,
                formatter: function (val) {
                    return val + '';
                },
                textStyle: {
                    color: '#fff',
                    fontSize: '15',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    opacity: 0.3,
                },
            },
        }],
        yAxis: [{
                type: "category",
                data: ['稳态简易工况法', '加载工况法', '综合检测'],
                inverse: true,
                gridIndex: 0,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                position: 'left',
                axisLabel: {
                    width: 100,
                    padding: [0, 0, 28, 10],
                    align: 'left',
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 15,
                        fontFamily: 'PingFang SC',
                        fontWeight: 440,
                        color: '#ffffff',
                        align: 'left',
                    },
                    rich: {
                        a: {
                            color: 'transparent', // 用来指定透明
                            lineHeight: 20,
                            fontFamily: 'digital',
                            fontSize: 10,
                            color: '#00FA04', // 100% 处的颜色,
                            shadowBlur: 10,
                        },
                    },
                },
            },
            {
                gridIndex: 0,
                type: 'category',
                position: 'right',
                inverse: true,
                data: uploadCnt,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    align: 'right',
                    padding: [0, 50, 30, 40],
                    textStyle: {
                        color: '#E4EF00',
                        fontSize: 15,
                    },
                    rich: {
                        y: {
                            color: '#E4EF00',
                            fontFamily: 'Orbitron',
                            fontSize: 20,
                        },
                        x: {
                            color: '#E4EF00',
                            fontFamily: 'Orbitron',
                            fontSize: 20, // 设置字体大小
                        },
                    },
                },
            },
        ],
        dataZoom: [{
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
            orient: 'vertical',
            zlevel: 66,
        }, ],
        series: [{
            type: "bar",
            name: '值',
            xAxisIndex: 0,
            label: {
				show: false,
				position: 'right',
				textStyle: {
					color: '#fff',
					fontSize: 20,
				},
			},
            itemStyle: {
				normal: {
					// barBorderRadius: 14,
					color: {
						colorStops: [{
							offset: 1,
							color: '#00FA04', // 100% 处的颜色
						},
					],
					},
				},
			},
            barWidth: 9, // 绿色的宽
            data: [210, 315, 481],
            barGap: 3, // 柱子之间间距
        },
        {
			// 分隔
			type: 'pictorialBar',
			itemStyle: {
				normal: {
					color: '#4b9bbe',
				},
			},
			symbolRepeat: 'fixed',
			symbolMargin: 10,
			symbol: 'roundRect',
			symbolClip: true,
			symbolSize: [4, 10],
			symbolPosition: 'start',
			symbolOffset: [0, 0],
			data: [210, 315, 481],
			z: 2,
			animationEasing: 'elasticOut',
		},
        {
			name: '背景',
			type: 'bar',
			barWidth: 12, // 外层白的边框的宽
			barGap: '-110%',
			data: [1000,1000,1000],
			itemStyle: {
				normal: {
					color: 'rgba(128, 128, 128, 0.1)',
					// barBorderRadius: 6,
					borderColor: '#f5f1f1',
				},
			},
			z: -1,
		},
    ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [{
            year: "检测线数",
            data: [210, 315, 481],
        },
        {
            year: "检测设备数",
            data: [300, 400, 305]
        }
    ];

    document.querySelector(".line h2").addEventListener("click", function (e) {
        var i = e.target == this.children[0] ? 0 : 1;
        option.series[0].data = dataAll[i].data;
        myChart.setOption(option);
    });
})();

// 第三个统计图模块
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    let yList = [49, 139, 68, 49, 168];
    let xData = ['2018年', '2019年', '2020年', '2021年', '2022年'];
    dom = 300;
    barWidth = dom / 20;
    let colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push({
            type: "linear",
            x: 0,
            x2: 1,
            y: 0,
            y2: 0,
            colorStops: [{
                    offset: 0,
                    color: "#fbf408", // 最左边
                },
                {
                    offset: 0.5,
                    color: "#fbd60a", // 左边的右边 颜色
                },
                {
                    offset: 0.5,
                    color: "#9fcb05", // 右边的左边 颜色
                },
                {
                    offset: 1,
                    color: "#bdbf10", //上面的颜色
                },
            ],
        });
    }
    option = {
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{ // 代表渐变色从正上方开始
                    offset: 0, // offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: '#e0f702',
                }, // 柱图渐变色
                {
                    offset: 1, // 指100%处的颜色
                    color: '#f9c802',
                },
            ],
        ),
        //提示框
        tooltip: {
            trigger: "axis",
            formatter: "{b} : {c}",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        /**区域位置*/
        grid: {
            left: "10%",
            right: "10%",
            top: "10%",
            bottom: "18%",
        },
        xAxis: [{
            type: "category",
            data: xData,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "#fff",
                    fontSize: '10',
                },
            }, //x轴文字样式
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(128, 128, 128, 0.1)",
                    shadowColor: "rgba(255,255,255,1)",
                    shadowOffsetX: "20",
                },
                symbol: ["none", "arrow"],
                symbolOffset: [0, 25],
            },
        }],
        yAxis: [{
            show: true,
            type: "value",
            axisLabel: {
                color: "#FFFFFF",
                margin: 0,
                fontSize: '12', //坐标轴的字号
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false, // y轴线的颜色
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'solid',
                }, // 后续如果要改，把false改为true然后调整下面的属性
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(253,245,230,0.3)",
                },
            },
        }],
        series: [{
                type: "bar",
                barWidth: barWidth,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex % 7];
                        },
                    },
                },
                label: {
                    show: false,
                    position: [barWidth / 2, -(barWidth + 20)],
                    color: "#ffffff",
                    fontSize: 14,
                    fontStyle: "bold",
                    align: "center",
                },
                data: yList,
            },
            {
                z: 2,
                type: "pictorialBar",
                data: yList,
                symbol: "diamond",
                symbolOffset: [0, "50%"],
                symbolSize: [barWidth, barWidth * 0.5],
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex % 7];
                        },
                    },
                },
            },
            {
                z: 3,
                type: "pictorialBar",
                symbolPosition: "end",
                data: yList,
                symbol: "diamond",
                symbolOffset: [0, "-50%"],
                symbolSize: [barWidth, barWidth * 0.5],
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: function (params) {
                            return colors[params.dataIndex % 7].colorStops[0].color;
                        },
                    },
                },
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();