
import { useRef } from "react";

function Setup({ photo, onPhotoChange, onTakePhoto, onFinish, onBack }) {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  function handlePhotoChange(event) {
    const file = event.target.files?.[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      onPhotoChange(imageURL);
    }

    event.target.value = "";
  }

  return (
    <main className="setup-screen">

      {/* Back button */}
      <button
        type="button"
        className="setup-back"
        onClick={onBack}
        aria-label="Go back"
      >
        ‹
      </button>

      {/* Progress indicator */}
      <div className="setup-progress">
        <span>STEP 3 OF 3</span>

        <div className="setup-progress-bars">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Logo */}
      <img
        className="setup-logo"
        src="/stms-logo.png"
        alt="STMS Logo"
      />

      {/* Heading */}
      <h1 className="setup-title">
        Add a profile photo
      </h1>

      {/* Description */}
      <p className="setup-subtitle">
        Help drivers and operators recognise you.
        You can change it later.
      </p>

      {/* Profile photo */}
      <div className="profile-photo">
        {photo ? (
          <img
            src={photo}
            alt="Selected profile"
          />
        ) : (
          <span className="profile-placeholder">
            ?
          </span>
        )}
      </div>

      {/* Camera input */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        hidden
        onChange={handlePhotoChange}
      />

      {/* Library input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handlePhotoChange}
      />

      {/* Take a photo */}
      <button
        type="button"
        className="setup-option setup-option--camera"
       
        onClick={() => cameraInputRef.current?.click()}
      >
        Take a photo
      </button>

      {/* Choose from library */}
      <button
        type="button"
        className="setup-option setup-option--library"
         onClick={() => fileInputRef.current?.click()}
      >
        Choose from library
      </button>

      {/* Finish setup */}
      <button
        type="button"
        className="setup-finish"
        onClick={onFinish}
      >
        Finish setup <span>→</span>
      </button>

      {/* Skip */}
      <button
        type="button"
        className="setup-skip"
        onClick={onFinish}
      >
        Skip for now
      </button>

    </main>
  );
}

export default Setup;
