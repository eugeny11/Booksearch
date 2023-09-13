import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIndicator(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return showIndicator ? (
    <div className="loading-indicator">
      <FontAwesomeIcon icon={faSpinner} spin size="lg" />
    </div>
  ) : null;
};

export default LoadingIndicator;
