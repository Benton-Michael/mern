import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      {/* Using Link here instead of NavLink because we don't need to have the active status for pages that don't exist */}
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
