ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9377").setExtent([4691261.085662, 2081564.792531, 4774627.102431, 2129132.938419]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LosNevados2000_1 = new ol.format.GeoJSON();
var features_LosNevados2000_1 = format_LosNevados2000_1.readFeatures(json_LosNevados2000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_LosNevados2000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LosNevados2000_1.addFeatures(features_LosNevados2000_1);
var lyr_LosNevados2000_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LosNevados2000_1, 
                style: style_LosNevados2000_1,
                popuplayertitle: 'Los Nevados 2000',
                interactive: true,
    title: 'Los Nevados 2000<br />\
    <img src="styles/legend/LosNevados2000_1_0.png" /> Bosque<br />\
    <img src="styles/legend/LosNevados2000_1_1.png" /> Formacion natural no forestal inundable<br />\
    <img src="styles/legend/LosNevados2000_1_2.png" /> Otra formación natural no forestal<br />\
    <img src="styles/legend/LosNevados2000_1_3.png" /> Mosaico de agricultura y/o pasto<br />\
    <img src="styles/legend/LosNevados2000_1_4.png" /> Playas, dunas y bancos de arena<br />\
    <img src="styles/legend/LosNevados2000_1_5.png" /> Infraestructura urbana<br />\
    <img src="styles/legend/LosNevados2000_1_6.png" /> Otra área sin vegetación<br />\
    <img src="styles/legend/LosNevados2000_1_7.png" /> No observado<br />\
    <img src="styles/legend/LosNevados2000_1_8.png" />  Afloramiento rocoso<br />\
    <img src="styles/legend/LosNevados2000_1_9.png" /> Río, lago u océano<br />\
    <img src="styles/legend/LosNevados2000_1_10.png" /> Glaciar y nival<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_LosNevados2000_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LosNevados2000_1];
lyr_LosNevados2000_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'cobertura': 'cobertura', 'Area_ha': 'Area_ha', });
lyr_LosNevados2000_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'cobertura': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_LosNevados2000_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'cobertura': 'header label - always visible', 'Area_ha': 'header label - always visible', });
lyr_LosNevados2000_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});