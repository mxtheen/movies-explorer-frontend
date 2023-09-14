import React from "react";
function InfoToolTip({ onClose, isOpen, isSucces, errMessage }) {
  function handleClosePopup() {
    onClose();
  }
  return (
    <section className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          onClick={handleClosePopup}
        ></button>
        {isSucces ? (
          <p className="popup__text">{errMessage}</p>
        ) : (
          <p className="popup__text">{errMessage}</p>
        )}
      </div>
    </section>
  );
}
export default InfoToolTip;
