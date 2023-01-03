import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { FiHelpCircle } from 'react-icons/fi';

import "./Help.css";

function Help() {

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {

    $('#help-button').on('click', function(){ setVisibility(!visibility) });

  }, []);

  function exitHelp() {
    setVisibility(false)
  }

  return (
    <div className="help_container" style={{visibility: visibility === true ? 'visible' : 'hidden'}}>
      <div className="help_header">
        <div className="title">
          <FiHelpCircle className="help_header_icon"/>
        </div>
        <div className="exit">
          <button onClick={() => exitHelp()}>X</button>
        </div>
      </div>
      <div className="help_content">
        <h3>How-To</h3>
        <p>Use the switch buttons in the navigation bar to view interactive data on earthquakes, air pollution, tectonic plates, city populations, and tropical cyclones in real-time!</p>
      </div>
      
    </div>
  );
}

export default Help;