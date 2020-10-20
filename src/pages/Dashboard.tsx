import React from 'react';
import SidebarDashboard from '../components/SidebarDashboard';
import { Map, Marker, TileLayer } from "react-leaflet";
import { FiEdit3, FiTrash } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import L from 'leaflet';
import { Link } from 'react-router-dom';


import '../styles/pages/dashboard.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

function Dashboard() {
  return (
    <div id="page-dashboard">
      <SidebarDashboard />
      <main>
        <h2>Orfanatos Cadastrados</h2>
        <fieldset>
          <div className="map-container">
              <Map 
                center={[-20.529152, -47.4447872]} 
                zoom={16} 
                style={{ width: '100%', height: 180 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-20.529152, -47.4447872]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${-20.529152},${-47.4447872}`}>Ver rotas no Google Maps</a>
                <div className="buttons">
                  <Link className="edit" to="/edit"><FiEdit3 size={24} color="#0089A5"/> </Link>
                  <button><FiTrash size={24} color="#0089A5"/></button>
                </div>
              </footer>
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default Dashboard;