(() => {
    "use strict";
    function addTouchClass() {
        let menuArrows = document.querySelectorAll(".menu__arrow");
        if (menuArrows.length > 0) for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", (function() {
                menuArrow.parentElement.classList.toggle("active");
            }));
        }
    }

		function list() {

			const arrows = document.querySelectorAll('._icon-arrow-down');
			const subs = document.querySelectorAll('.menu__sub-item');

			arrows.forEach(function(el){

				el.addEventListener('click', function(){
					subs.forEach(function(e){
						if(e.classList.contains('active')){
							e.classList.remove('active');

							

							e.addEventListener('click', function(ele){
								if(!ele.target.parentElement.classList.contains('active')){
									ele.target.parentElement.classList.add('active');
									e.addEventListener('click', function(ele){
										if(ele.target.parentElement.classList.contains('active')){
											ele.target.parentElement.classList.remove('active');
										} 
									})
								} 
							})

							

						}
					});
				});
			});

		}

		function city(){
			const cities = document.querySelectorAll(".menu__sub-link");

			if(cities.length > 0){
				cities.forEach(function(e){
					e.addEventListener('click', function(el){
						const city = el.target;
						const city2 = city.innerHTML;
						
						const chosenCity = document.querySelector('#city');

						chosenCity.innerHTML = city2;


						const item = city.closest('.back');
						item.classList.remove('active');

						const object_list = document.querySelectorAll('.menu__object-list');
						const objectLinks = document.querySelectorAll('.menu__object');

						object_list.forEach(function(e){

							e.classList.remove('selected');
							
							const cityName = e.getAttribute("id")
								if(cityName == city2){
									const listCity = document.querySelector('#' + cityName);

									if(!listCity.classList.contains('.selected')){
										listCity.classList.add('selected');

										const jai = document.querySelector('.jai');

										jai.style.display = "none";

									}

									const objectName = document.querySelector('#object');

									objectLinks.forEach(function(e){
										if(e.closest('.selected')){
											e.addEventListener('click', function(){
												objectName.innerHTML = e.innerHTML;
												const itemf = e.closest('.second');
												itemf.classList.remove('active');
											})
										}
									})

								}
						})
					
					});
				});
			};

			
		}

    function yandex() {
        ymaps.ready(init);
        function init() {
            var map = new ymaps.Map("map", {
                center: [ 55.75, 37.57 ],
                zoom: 10
            });

			var redMarker = new ymaps.Placemark([55.75, 37.57], { // Marker for initial coordinates (Moscow)
				hintContent: 'Red Marker'
			}, {
				iconColor: '#FF0000'
			});
			map.geoObjects.add(redMarker)

			document.getElementById("setLocationButton").addEventListener("click", (function() {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", "data.xml", true);
                xhr.onreadystatechange = function() {
                    if (4 === xhr.readyState && 200 === xhr.status) {
                        var xml = xhr.responseXML;
                        var lat = xml.getElementsByTagName("lat")[0].childNodes[0].nodeValue;
                        var lon = xml.getElementsByTagName("lon")[0].childNodes[0].nodeValue;
                        var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
                        map.setCenter([ lat, lon ]);
                        map.setZoom(zoom);
						var redMarker1 = new ymaps.Placemark([lat, lon], {}, { // Marker for lat and lon (from data.xmL)
																				// coordinates (New-York)
							preset: 'islands#redIcon'
						});
						map.geoObjects.add(redMarker1);
                    }
                };
                xhr.send();
            }));
            document.getElementById("setLocationButton1").addEventListener("click", (function() {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", "data.xml", true);
                xhr.onreadystatechange = function() {
                    if (4 === xhr.readyState && 200 === xhr.status) {
                        var xml = xhr.responseXML;
                        var lat1 = xml.getElementsByTagName("lat1")[0].childNodes[0].nodeValue;
                        var lon1 = xml.getElementsByTagName("lon1")[0].childNodes[0].nodeValue;
                        var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
                        map.setCenter([ lat1, lon1 ]);
                        map.setZoom(zoom);
						var redMarker2 = new ymaps.Placemark([lat1, lon1], {}, { // Marker for lat1 and lon1 (from data.xmL)
																				// coordinates (London)
							preset: 'islands#redIcon'
						});
						map.geoObjects.add(redMarker2);
                    }
                };
                xhr.send();
            }));
            document.getElementById("setLocationButton2").addEventListener("click", (function() {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", "data.xml", true);
                xhr.onreadystatechange = function() {
                    if (4 === xhr.readyState && 200 === xhr.status) {
                        var xml = xhr.responseXML;
                        var lat2 = xml.getElementsByTagName("lat2")[0].childNodes[0].nodeValue;
                        var lon2 = xml.getElementsByTagName("lon2")[0].childNodes[0].nodeValue;
                        var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
                        map.setCenter([ lat2, lon2 ]);
                        map.setZoom(zoom);
						var redMarker3 = new ymaps.Placemark([lat2, lon2], {}, { // Marker for lat2 and lon2 (from data.xmL)
																				// coordinates (Kiev)
							preset: 'islands#redIcon'
						});
						map.geoObjects.add(redMarker3);
                    }
                };
                xhr.send();
            }));
						document.getElementById("setLocationButton3").addEventListener("click", (function() {
							var xhr = new XMLHttpRequest;
							xhr.open("GET", "data.xml", true);
							xhr.onreadystatechange = function() {
									if (4 === xhr.readyState && 200 === xhr.status) {
											var xml = xhr.responseXML;
											var lat3 = xml.getElementsByTagName("lat3")[0].childNodes[0].nodeValue;
											var lon3 = xml.getElementsByTagName("lon3")[0].childNodes[0].nodeValue;
											var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
											map.setCenter([ lat3, lon3 ]);
											map.setZoom(zoom);
										var redMarker4 = new ymaps.Placemark([lat3, lon3], {}, { // Marker for lat3 and lon3 (from data.xmL)
																								// coordinates (Astana)
											preset: 'islands#redIcon'
										});
										map.geoObjects.add(redMarker4);
									}
							};
							xhr.send();
					}));
					document.getElementById("setLocationButton4").addEventListener("click", (function() {
						var xhr = new XMLHttpRequest;
						xhr.open("GET", "data.xml", true);
						xhr.onreadystatechange = function() {
								if (4 === xhr.readyState && 200 === xhr.status) {
										var xml = xhr.responseXML;
										var lat4 = xml.getElementsByTagName("lat4")[0].childNodes[0].nodeValue;
										var lon4 = xml.getElementsByTagName("lon4")[0].childNodes[0].nodeValue;
										var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
										map.setCenter([ lat4, lon4 ]);
										map.setZoom(zoom);
									var redMarker5 = new ymaps.Placemark([lat4, lon4], {}, { // Marker for lat4 and lon4 (from data.xmL)
																							// coordinates (Saint Peterburg)
										preset: 'islands#redIcon'
									});
									map.geoObjects.add(redMarker5);
								}
						};
						xhr.send();
				}));
				document.getElementById("setLocationButton5").addEventListener("click", (function() {
					var xhr = new XMLHttpRequest;
					xhr.open("GET", "data.xml", true);
					xhr.onreadystatechange = function() {
							if (4 === xhr.readyState && 200 === xhr.status) {
									var xml = xhr.responseXML;
									var lat5 = xml.getElementsByTagName("lat5")[0].childNodes[0].nodeValue;
									var lon5 = xml.getElementsByTagName("lon5")[0].childNodes[0].nodeValue;
									var zoom = xml.getElementsByTagName("zoom")[0].childNodes[0].nodeValue;
									map.setCenter([ lat5, lon5 ]);
									map.setZoom(zoom);
								var redMarker6 = new ymaps.Placemark([lat5, lon5], {}, { // Marker for lat5 and lon5 (from data.xmL)
																						// coordinates (Toronto)
									preset: 'islands#redIcon'
								});
								map.geoObjects.add(redMarker6);
							}
					};
					xhr.send();
			}));
        }
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    addTouchClass();
    yandex();
		list();
		city();
})();