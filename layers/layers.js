var wms_layers = [];

var lyr_Waiumapgeo150_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Waiu-map-geo-150<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Waiumapgeo150_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [19472544.765112, -5049328.887694, 19473150.002418, -5048776.014430]
        })
    });
var format_Photoalbum_1 = new ol.format.GeoJSON();
var features_Photoalbum_1 = format_Photoalbum_1.readFeatures(json_Photoalbum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photoalbum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photoalbum_1.addFeatures(features_Photoalbum_1);
var lyr_Photoalbum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photoalbum_1, 
                style: style_Photoalbum_1,
                popuplayertitle: 'Photo-album',
                interactive: true,
                title: '<img src="styles/legend/Photoalbum_1.png" /> Photo-album'
            });
var format_Photos_2 = new ol.format.GeoJSON();
var features_Photos_2 = format_Photos_2.readFeatures(json_Photos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_2.addFeatures(features_Photos_2);
var lyr_Photos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_2, 
                style: style_Photos_2,
                popuplayertitle: 'Photos',
                interactive: true,
                title: '<img src="styles/legend/Photos_2.png" /> Photos'
            });
var format_WaiuBridges_3 = new ol.format.GeoJSON();
var features_WaiuBridges_3 = format_WaiuBridges_3.readFeatures(json_WaiuBridges_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaiuBridges_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaiuBridges_3.addFeatures(features_WaiuBridges_3);
var lyr_WaiuBridges_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaiuBridges_3, 
                style: style_WaiuBridges_3,
                popuplayertitle: 'Waiu-Bridges',
                interactive: true,
                title: '<img src="styles/legend/WaiuBridges_3.png" /> Waiu-Bridges'
            });

lyr_Waiumapgeo150_0.setVisible(true);lyr_Photoalbum_1.setVisible(true);lyr_Photos_2.setVisible(true);lyr_WaiuBridges_3.setVisible(true);
var layersList = [lyr_Waiumapgeo150_0,lyr_Photoalbum_1,lyr_Photos_2,lyr_WaiuBridges_3];
lyr_Photoalbum_1.set('fieldAliases', {'fid': 'fid', 'Site': 'Site', 'Date': 'Date', 'Photo-1': 'Photo-1', 'Photo-2': 'Photo-2', 'Description': 'Description', 'Comment': 'Comment', });
lyr_Photos_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Date': 'Date', 'Description': 'Description', 'Photo-1': 'Photo-1', 'Photo-2': 'Photo-2', 'Comment': 'Comment', 'Photo-3': 'Photo-3', 'Comment-3': 'Comment-3', });
lyr_WaiuBridges_3.set('fieldAliases', {'fid': 'fid', 'image': 'image', 'Name': 'Name', });
lyr_Photoalbum_1.set('fieldImages', {'fid': 'TextEdit', 'Site': 'TextEdit', 'Date': 'DateTime', 'Photo-1': 'ExternalResource', 'Photo-2': 'TextEdit', 'Description': 'TextEdit', 'Comment': 'TextEdit', });
lyr_Photos_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Description': 'TextEdit', 'Photo-1': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Comment': 'TextEdit', 'Photo-3': 'TextEdit', 'Comment-3': 'Range', });
lyr_WaiuBridges_3.set('fieldImages', {'fid': 'TextEdit', 'image': 'ExternalResource', 'Name': 'TextEdit', });
lyr_Photoalbum_1.set('fieldLabels', {'fid': 'no label', 'Site': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Photo-1': 'header label - visible with data', 'Photo-2': 'inline label - visible with data', 'Description': 'inline label - visible with data', 'Comment': 'header label - visible with data', });
lyr_Photos_2.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Description': 'inline label - visible with data', 'Photo-1': 'inline label - visible with data', 'Photo-2': 'inline label - visible with data', 'Comment': 'inline label - visible with data', 'Photo-3': 'inline label - visible with data', 'Comment-3': 'inline label - visible with data', });
lyr_WaiuBridges_3.set('fieldLabels', {'fid': 'no label', 'image': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_WaiuBridges_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});