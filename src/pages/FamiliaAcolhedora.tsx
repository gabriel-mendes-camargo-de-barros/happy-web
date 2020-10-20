import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import Sidebar from "../components/Sidebar";
import api from "../services/api";

import { FiPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/familia-acolhedora.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

function FamiliaAcolhedora() {
  const[open_on_weekends, setOpenOnWeekends] = useState(true);

  return (
    <div id="tornar-familia-acolhedora">
      <Sidebar/>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Cadastro para se tornar família acolhedora</legend>        

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                // value={name} 
                // onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Whatsapp</label>
              <input 
                id="opening_hours" 
                // value={opening_hours} 
                // onChange={event => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Perfil <span>perfil das criaças que vai acolher</span></label>
              <textarea 
                id="name" 
                maxLength={300} 
                // value={about}
                // onChange={event => setAbout(event.target.value)}
              />
            </div>

            {/* <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name}/>
                  )
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              
              <input multiple type="file" id="image[]" />
            </div> */}

            
            <div className="input-block">
              <label htmlFor="opening_hours">Senha</label>
              <input 
                id="opening_hours" 
                // value={opening_hours} 
                // onChange={event => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Possui mais do que 21 anos?</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active' : '' }
                  onClick={() =>setOpenOnWeekends(true) }
                >
                    Sim
                </button>

                <button 
                  type="button"
                  className={!open_on_weekends ? 'active' : '' }
                  onClick={() =>setOpenOnWeekends(false) }
                >
                  Não
                </button>
              </div>
            </div>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

export default FamiliaAcolhedora;