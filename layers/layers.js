ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2193").setExtent([1761442.424319, 5431731.734170, 1761614.528080, 5431876.479836]);
var wms_layers = [];

var lyr_Waiumapgeoref150L2_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Waiu-map-georef-150L2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Waiumapgeoref150L2_0.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1761311.670121, 5431672.320025, 1761675.077126, 5432070.953724]
        })
    });
var format_WaiuB42025photo_points_1 = new ol.format.GeoJSON();
var features_WaiuB42025photo_points_1 = format_WaiuB42025photo_points_1.readFeatures(json_WaiuB42025photo_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_WaiuB42025photo_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaiuB42025photo_points_1.addFeatures(features_WaiuB42025photo_points_1);
var lyr_WaiuB42025photo_points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaiuB42025photo_points_1, 
                style: style_WaiuB42025photo_points_1,
                popuplayertitle: 'Waiu-B4-2025 — photo_points',
                interactive: true,
                title: '<img src="styles/legend/WaiuB42025photo_points_1.png" /> Waiu-B4-2025 — photo_points'
            });
var format_Waiuwatersphoto_points_2 = new ol.format.GeoJSON();
var features_Waiuwatersphoto_points_2 = format_Waiuwatersphoto_points_2.readFeatures(json_Waiuwatersphoto_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Waiuwatersphoto_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waiuwatersphoto_points_2.addFeatures(features_Waiuwatersphoto_points_2);
var lyr_Waiuwatersphoto_points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waiuwatersphoto_points_2, 
                style: style_Waiuwatersphoto_points_2,
                popuplayertitle: 'Waiu-waters — photo_points',
                interactive: true,
                title: '<img src="styles/legend/Waiuwatersphoto_points_2.png" /> Waiu-waters — photo_points'
            });
var format_Waiuphotosphoto_points_3 = new ol.format.GeoJSON();
var features_Waiuphotosphoto_points_3 = format_Waiuphotosphoto_points_3.readFeatures(json_Waiuphotosphoto_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Waiuphotosphoto_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waiuphotosphoto_points_3.addFeatures(features_Waiuphotosphoto_points_3);
var lyr_Waiuphotosphoto_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waiuphotosphoto_points_3, 
                style: style_Waiuphotosphoto_points_3,
                popuplayertitle: 'Waiu-photos — photo_points',
                interactive: true,
                title: '<img src="styles/legend/Waiuphotosphoto_points_3.png" /> Waiu-photos — photo_points'
            });

lyr_Waiumapgeoref150L2_0.setVisible(true);lyr_WaiuB42025photo_points_1.setVisible(true);lyr_Waiuwatersphoto_points_2.setVisible(true);lyr_Waiuphotosphoto_points_3.setVisible(true);
var layersList = [lyr_Waiumapgeoref150L2_0,lyr_WaiuB42025photo_points_1,lyr_Waiuwatersphoto_points_2,lyr_Waiuphotosphoto_points_3];
lyr_WaiuB42025photo_points_1.set('fieldAliases', {'fid': 'fid', 'image': 'image', 'date': 'date', 'heading': 'heading', 'latlon': 'latlon', 'nztm': 'nztm', });
lyr_Waiuwatersphoto_points_2.set('fieldAliases', {'fid': 'fid', 'image': 'image', 'date': 'date', 'heading': 'heading', 'latlon': 'latlon', 'nztm': 'nztm', });
lyr_Waiuphotosphoto_points_3.set('fieldAliases', {'fid': 'fid', 'image': 'image', 'date': 'date', 'heading': 'heading', 'latlon': 'latlon', 'nztm': 'nztm', });
lyr_WaiuB42025photo_points_1.set('fieldImages', {'fid': 'TextEdit', 'image': 'ExternalResource', 'date': 'TextEdit', 'heading': 'TextEdit', 'latlon': 'TextEdit', 'nztm': 'TextEdit', });
lyr_Waiuwatersphoto_points_2.set('fieldImages', {'fid': 'TextEdit', 'image': 'ExternalResource', 'date': 'TextEdit', 'heading': 'TextEdit', 'latlon': 'TextEdit', 'nztm': 'TextEdit', });
lyr_Waiuphotosphoto_points_3.set('fieldImages', {'fid': 'TextEdit', 'image': 'ExternalResource', 'date': 'TextEdit', 'heading': 'TextEdit', 'latlon': 'TextEdit', 'nztm': 'TextEdit', });
lyr_WaiuB42025photo_points_1.set('fieldLabels', {'fid': 'no label', 'image': 'inline label - visible with data', 'date': 'inline label - visible with data', 'heading': 'inline label - visible with data', 'latlon': 'no label', 'nztm': 'no label', });
lyr_Waiuwatersphoto_points_2.set('fieldLabels', {'fid': 'no label', 'image': 'inline label - visible with data', 'date': 'inline label - visible with data', 'heading': 'inline label - visible with data', 'latlon': 'no label', 'nztm': 'no label', });
lyr_Waiuphotosphoto_points_3.set('fieldLabels', {'fid': 'no label', 'image': 'inline label - visible with data', 'date': 'inline label - visible with data', 'heading': 'inline label - visible with data', 'latlon': 'no label', 'nztm': 'no label', });
lyr_Waiuphotosphoto_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});