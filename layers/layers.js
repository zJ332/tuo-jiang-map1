var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '中国地图',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
            })
        });
var format_Excel1xlsx22222_1 = new ol.format.GeoJSON();
var features_Excel1xlsx22222_1 = format_Excel1xlsx22222_1.readFeatures(json_Excel1xlsx22222_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Excel1xlsx22222_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Excel1xlsx22222_1.addFeatures(features_Excel1xlsx22222_1);
var lyr_Excel1xlsx22222_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Excel1xlsx22222_1, 
                style: style_Excel1xlsx22222_1,
                popuplayertitle: '最终更新版Excel文档-1.xlsx22222',
                interactive: true,
                title: '<img src="styles/legend/Excel1xlsx22222_1.png" /> 最终更新版Excel文档-1.xlsx22222'
            });

lyr__0.setVisible(true);lyr_Excel1xlsx22222_1.setVisible(true);
var layersList = [lyr__0,lyr_Excel1xlsx22222_1];
lyr_Excel1xlsx22222_1.set('fieldAliases', {'序号': '序号', '姓名': '姓名', '朝代': '朝代', '籍贯(原名)': '籍贯(原名)', '籍贯(现代)': '籍贯(现代)', '经度': '经度', '纬度': '纬度', '简介': '简介', '主要作品': '主要作品', });
lyr_Excel1xlsx22222_1.set('fieldImages', {'序号': 'Range', '姓名': 'TextEdit', '朝代': 'TextEdit', '籍贯(原名)': 'TextEdit', '籍贯(现代)': 'TextEdit', '经度': 'TextEdit', '纬度': 'TextEdit', '简介': 'TextEdit', '主要作品': 'TextEdit', });
lyr_Excel1xlsx22222_1.set('fieldLabels', {'序号': 'header label - always visible', '姓名': 'header label - always visible', '朝代': 'inline label - always visible', '籍贯(原名)': 'inline label - always visible', '籍贯(现代)': 'inline label - always visible', '经度': 'hidden field', '纬度': 'hidden field', '简介': 'inline label - always visible', '主要作品': 'inline label - always visible', });
lyr_Excel1xlsx22222_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});