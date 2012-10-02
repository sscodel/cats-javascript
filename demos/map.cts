.map {
  template: widgets.html#map
  callback-after: RenderMap;
}

.map .api-key {
  value: apikey;
}

.map table.markers tbody {
  repeat: markers;
}

.map table.markers td.title {
  value: title;
}

.map table.markers td.lat {
  value: lat;
}

.map table.markers td.lng {
  value: lng;
}