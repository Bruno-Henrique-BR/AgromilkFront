(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{x04h:function(e,t,o){"use strict";o.r(t);var r=o("DUip"),l=o("Valr"),a=o("QJY3"),i=o("TYT/"),n=[{path:"",children:[{path:"fullscreen",component:function(){function e(){}return e.prototype.ngOnInit=function(){var e=new google.maps.LatLng(40.748817,-73.985428),t={zoom:13,center:e,scrollwheel:!1,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},o=new google.maps.Map(document.getElementById("map"),t);new google.maps.Marker({position:e,title:"Hello World!"}).setMap(o)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-fullscreen-map-cmp"]],decls:1,vars:0,consts:[["id","map"]],template:function(e,t){1&e&&i.Pb(0,"div",0)},encapsulation:2}),e}()}]},{path:"",children:[{path:"google",component:function(){function e(){}return e.prototype.ngOnInit=function(){var e=new google.maps.LatLng(40.748817,-73.985428),t={zoom:8,center:e,scrollwheel:!1},o=new google.maps.Map(document.getElementById("regularMap"),t),r=new google.maps.Marker({position:e,title:"Regular Map!"});r.setMap(o);var l={zoom:13,center:e=new google.maps.LatLng(40.748817,-73.985428),scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]};o=new google.maps.Map(document.getElementById("customSkinMap"),l),(r=new google.maps.Marker({position:e,title:"Custom Skin & Settings Map!"})).setMap(o);var a={zoom:3,scrollwheel:!1,center:e=new google.maps.LatLng(40.748817,-73.985428),mapTypeId:google.maps.MapTypeId.SATELLITE};o=new google.maps.Map(document.getElementById("satelliteMap"),a),(r=new google.maps.Marker({position:e,title:"Satellite Map!"})).setMap(o)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-vector-maps-cmp"]],decls:27,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-text","card-header-rose"],[1,"card-text"],[1,"card-title"],[1,"card-content"],["id","satelliteMap",1,"map","map-big"],[1,"col-md-6"],["id","regularMap",1,"map"],["id","customSkinMap",1,"map"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"div",4),i.Ub(5,"div",5),i.Ub(6,"div",6),i.Ub(7,"h4",7),i.Gc(8,"Satellite Map"),i.Tb(),i.Tb(),i.Tb(),i.Ub(9,"div",8),i.Pb(10,"div",9),i.Tb(),i.Tb(),i.Tb(),i.Ub(11,"div",10),i.Ub(12,"div",4),i.Ub(13,"div",5),i.Ub(14,"div",6),i.Ub(15,"h4",7),i.Gc(16,"Regular Map"),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"div",8),i.Pb(18,"div",11),i.Tb(),i.Tb(),i.Tb(),i.Ub(19,"div",10),i.Ub(20,"div",4),i.Ub(21,"div",5),i.Ub(22,"div",6),i.Ub(23,"h4",7),i.Gc(24,"Custom Skin & Settings Map"),i.Tb(),i.Tb(),i.Tb(),i.Ub(25,"div",8),i.Pb(26,"div",12),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb())},encapsulation:2}),e}()}]},{path:"",children:[{path:"vector",component:function(){function e(){}return e.prototype.ngOnInit=function(){$("#worldMap").vectorMap({map:"world_en",backgroundColor:"transparent",borderColor:"#818181",borderOpacity:.25,borderWidth:1,color:"#ffffff",enableZoom:!0,hoverColor:"#b3b3b3",hoverOpacity:null,normalizeFunction:"linear",scaleColors:["#b6d6ff","#005ace"],selectedColor:"#c9dfaf",selectedRegions:null,showTooltip:!0,onRegionClick:function(e,t,o){var r='You clicked "'+o+'" which has the code: '+t.toUpperCase();alert(r)}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-vector-maps-cmp"]],decls:12,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"header","text-center"],[1,"title"],[1,"category"],[1,"row"],[1,"col-md-12"],[1,"card","card-plain"],[1,"card-content"],["id","worldMap",1,"map","map-big"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"h3",3),i.Gc(4,"World Map"),i.Tb(),i.Ub(5,"p",4),i.Gc(6,"Looks great on any resolution. Made by our friends from jVector Map."),i.Tb(),i.Tb(),i.Ub(7,"div",5),i.Ub(8,"div",6),i.Ub(9,"div",7),i.Ub(10,"div",8),i.Pb(11,"div",9),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb())},encapsulation:2}),e}()}]}];o.d(t,"MapsModule",(function(){return s}));var s=function(){function e(){}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[l.c,r.f.forChild(n),a.j]]}),e}()}}]);