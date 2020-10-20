import React from 'react';
import { FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/components/sidebar-dashboard.css';

export default function SidebarDashboard() {
    const { goBack } = useHistory();


    return (
        <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />
        <main>
          <Link to="/acesso-restrito/dashboard" className="map" type="button" /*onClick={goDashbord}*/>
            <FiMapPin size={24} color="#0089A5" />
          </Link>
          <Link to="/acesso-restrito/pendentes" className="alert" type="button" /*onClick={goPendentes}*/>
            <FiAlertCircle size={24} color="#FFF" />
          </Link>
        </main>
        <footer>
          <button type="button" onClick={goBack}>
            <FiPower size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}