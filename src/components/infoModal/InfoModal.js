import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import './Styles.scss';

const InfoModal = ({ info, hide }) => {
  return (
    <>
      <div className="backdrop" onClick={hide}></div>
      <div className="modal--main">
        <div className="modal--arrow-up"></div>
        <div className="modal--content">
          <div className="modal--head">
            <div className="modal--head-empty"></div>
            <h1 className="modal--head-header">Rules</h1>
            <FontAwesomeIcon
              icon={faWindowClose}
              onClick={hide}
              className="modal--close-icon"
            />
          </div>
          <p className="modal--p">{info}</p>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
