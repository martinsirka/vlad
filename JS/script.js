// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': 'gtAldAyF3Qjl9DsI2cZ9',
    'app_code': '1VMoyheukn4xWD0NBdu9LA'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map, {
        zoom: 11,
        center: {
            lng: 20.5324602,
            lat: 44.796298
        }
    });