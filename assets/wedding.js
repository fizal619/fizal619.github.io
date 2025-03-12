function main() {
  let lastLocationIndex = 0;

  const locations = {
    guyana: { zoom: 9.5, center: [-58.2781, 6.8353] },
    lasvegas: { zoom: 13, center: [-115.1513916, 36.1564755] },
    nyc: { zoom: 11.37, center: [-73.9757, 40.7684] },
  }

  const locationSequences = [
    locations.guyana,
    locations.nyc,
    locations.lasvegas,
  ]
  maptilersdk.config.apiKey = 'IZ8HzGXmW1yr62tZDW13';
  const map = new maptilersdk.Map({
    container: 'map',
    zoom: locationSequences[0].zoom,
    center: locationSequences[0].center,
    style: maptilersdk.MapStyle.BASIC, //learn more about map styles: https://docs.maptiler.com/sdk-js/api/map-styles/
    geolocateControl: false, //learn more about controls: https://docs.maptiler.com/sdk-js/api/controls/
    hash: true //add zoom, center latitude, center longitude, bearing, and pitch as hash fragment to URL
  });
  function sleepAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function flyToAsync(map, options) {
    return new Promise(function (myResolve, myReject) {
      map.once("moveend", () => {
        myResolve(true);
      });

      map.once("touchstart", () => {
        myResolve(false);
      });

      map.once("mousedown", () => {
        myResolve(false);
      });

      map.flyTo(options);
    });
  }

  const starMarker1 = document.createElement("img");
  starMarker1.src = "/assets/imgs/star.png";
  starMarker1.style.width = "48px";
  starMarker1.style.height = "48px";
  starMarker1.style.position = "absolute";

  const starMarker2 = document.createElement("img");
  starMarker2.src = "/assets/imgs/star.png";
  starMarker2.style.width = "48px";
  starMarker2.style.height = "48px";
  starMarker2.style.position = "absolute";

  const heartMarker = document.createElement("img");
  heartMarker.src = "/assets/imgs/heart.png";
  heartMarker.style.width = "150px";
  heartMarker.style.height = "150px";
  heartMarker.style.position = "absolute";

  const weddingMarker = document.createElement("img");
  weddingMarker.src = "/assets/imgs/wedding.png";
  weddingMarker.style.width = "50px";
  weddingMarker.style.height = "50px";
  weddingMarker.style.position = "absolute";

  const parika = new maptilersdk.Marker({element: starMarker1})
    .setLngLat([-58.42941, 6.83712]);
  const gt = new maptilersdk.Marker({element: starMarker2})
    .setLngLat([-58.15527, 6.80448]);

  locations.guyana.markers = [parika, gt];

  const heart = new maptilersdk.Marker({element: heartMarker})
    .setLngLat(locations.nyc.center);

  locations.nyc.markers = [heart];

  const wedding = new maptilersdk.Marker({element: weddingMarker})
    .setLngLat(locations.lasvegas.center);

  locations.lasvegas.markers = [wedding];

  const venueHTML = `
    <div id="map-popup">
      <h2><b>The Viva Las Vegas Wedding Chapel</b></h2>
      <p>1205 Las Vegas Blvd S, Las Vegas, NV 89104</p>
      <p> <a href="https://maps.app.goo.gl/16DZ7uV2ArU7DqiQ6" target="_blank" class="btn"> View on Maps </a> </p>
    </div>
  `;

  wedding.setPopup(new maptilersdk.Popup({offset: [0, -50]}).setHTML(venueHTML));
  wedding.on('click', () => {
    wedding.togglePopup();
  });

  async function animateMap() {
    if (!map) return;

    let counter = 0;

    while (true) {
      if (counter === locationSequences.length) {
        break;
      }

      locationSequences.forEach((location, index) => {
        if (index !== counter) {
          location.markers.forEach(marker => {
            marker.remove();
          });
        }
      });

      const reachedEnd = await flyToAsync(map, {
        ...locationSequences[counter],
        speed: 1,
      });

      locationSequences[counter].markers.forEach(marker => {
        marker.addTo(map);
        marker.togglePopup();
      });

      await sleepAsync(1500);

      counter++;
    }
  }

  //add custom data and call animateMap() function
  map.on('load', async () => {

    await sleepAsync(1000);
    animateMap(); // call custom animation function that will start animating through the locations
  });
}

document.addEventListener('DOMContentLoaded', main);