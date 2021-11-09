import React from "react"

const Map = ({ link }) => {
  return (
    <>
      <div className="hidden lg:block">
        <iframe
          title="map"
          width="100%"
          height="100%"
          style={{
            height: "100%",
            minHeight: "409px",
            minWidth: "300px",
            borderRadius: "10px",
          }}
          src={link}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          <a href="http://www.siteway.de/maps-generator/" title="Google Map">
            (c) Homepage Google Maps Generator
          </a>
        </iframe>
      </div>
      <div className="block lg:hidden">
        <iframe
          title="map"
          width="100%"
          height="100%"
          style={{
            height: "100%",
            minHeight: "300px",
            minWidth: "300px",
            borderRadius: "10px",
          }}
          src={link}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          <a href="http://www.siteway.de/maps-generator/" title="Google Map">
            (c) Homepage Google Maps Generator
          </a>
        </iframe>
      </div>
    </>
  )
}

export default Map
