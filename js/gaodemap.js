var map = new AMap.Map('container', {
    center: [87.701, 43.925],
    layers: [new AMap.TileLayer.Satellite()],
    zoom: 8.4,
}); // 加载地图以及地图的中心位置
ajax('https://geo.datav.aliyun.com/areas_v3/bound/650100_full.json', function (err, geoJSON) {
    if (!err) {
        var geojson = new AMap.GeoJSON({
            geoJSON: geoJSON,
            // 还可以自定义getMarker和getPolyline
            getPolygon: function (geojson, lnglats) {
                // 计算面积
                var area = AMap.GeometryUtil.ringArea(lnglats[0])
                return new AMap.Polygon({
                    path: lnglats,
                    fillOpacity: 0.65, //里面颜色的透明度
                    fillColor: '#2F4F4F', //里面的颜色2F4F4F
                    strokeColor: '#00FA04', //外面一圈线的颜色00FF00
                    strokeWeight: 3.8, //线的类型为实线
                    strokeOpacity: 0.85, //边线透明度，取值范围0 - 1。
                    strokeStyle: 'solid',
                    strokeBlur: '5000',
                });
            }
        });
        map.add(geojson);
        log.success('GeoJSON 数据加载完成')
    } else {
        log.error('GeoJSON 服务请求失败')
    }
})
//第一个标签
var marker1 = new AMap.Marker({
    position: [87.545133,44.5974],
    icon: '../天地车人数据展示/png/抽检抽测点.png',
    offset: new AMap.Pixel(-13, -30)
});
marker1.setMap(map);

//第二个标签
var marker1 = new AMap.Marker({
    position: [87.526379,44.236257],
    icon: '../天地车人数据展示/png/OBD机动车.png',
    offset: new AMap.Pixel(-13, -30)
});
marker1.setMap(map);

//第三个标签
var marker1 = new AMap.Marker({
    position: [87.085425,44.080237],
    icon: '../天地车人数据展示/png//OBD机动车.png',
    offset: new AMap.Pixel(-13, -30),

});
marker1.setMap(map);

//第四个标签
var marker1 = new AMap.Marker({
    position: [87.600686,43.90936],
    icon: '../天地车人数据展示/png/黑烟抓拍点.png',
    offset: new AMap.Pixel(-13, -30)
});
marker1.setMap(map);

//第五个标签
var marker1 = new AMap.Marker({
    position: [88.29185,43.822565],
    icon: '../天地车人数据展示/png/遥感点.png',
    offset: new AMap.Pixel(-13, -30)
});
marker1.setMap(map);

//第六个标签
var marker1 = new AMap.Marker({
    position: [87.202016,43.601604],
    icon: '../天地车人数据展示/png/检测站.png',
    offset: new AMap.Pixel(-13, -30)
});
marker1.setMap(map);

//第七个标签
var marker1 = new AMap.Marker({
    position: [87.693517,43.558341],
    icon: '../天地车人数据展示/png/非道机械（工地）.png',
    offset: new AMap.Pixel(-13, -30)
});
map.add(polygon)
// 缩放地图到合适的视野级别
map.setFitView([polygon])

var polyEditor = new AMap.PolyEditor(map, polygon)