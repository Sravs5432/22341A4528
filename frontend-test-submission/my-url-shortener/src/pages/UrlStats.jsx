import React, { useEffect, useState } from "react";
import Log from "../middleware/log";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsImV4cCI6MTc1NzQwMTg0MywiaWF0IjoxNzU3NDAwOTQzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWUxMzExMzItMGIyZC00ZTlhLTllMzctMjY5ZjNkMmZhMTk5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibG9waW50aSBzcmF2YW50aGkiLCJzdWIiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEifSwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsIm5hbWUiOiJsb3BpbnRpIHNyYXZhbnRoaSIsInJvbGxObyI6IjIyMzQxYTQ1MjgiLCJhY2Nlc3NDb2RlIjoiZWV0aE5lIiwiY2xpZW50SUQiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEiLCJjbGllbnRTZWNyZXQiOiJYV3JtZkNmeFJ2ak5heXRIIn0.kzgxvfsht-5rl7n9sF-TF4pLJYsn0qle3ayP1SJpHhI";

function UrlStats() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortUrls") || "[]");
    setUrls(stored);

    Log("frontend", "info", "component", "Viewed URL statistics", token);
  }, []);

  return (
    <div>
      <h1>URL Statistics</h1>
      {urls.map((u, i) => (
        <div key={i}>
          <p>
            {u.original} → {window.location.origin}/{u.shortcode}
          </p>
          <p>Created: {new Date(u.createdAt).toLocaleString()}</p>
          <p>Expires: {new Date(u.expiresAt).toLocaleString()}</p>
          <p>Clicks: {u.clicks}</p>
          <ul>
            {u.clickHistory?.map((c, idx) => (
              <li key={idx}>{new Date(c.timestamp).toLocaleString()} - {c.location}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UrlStats;
