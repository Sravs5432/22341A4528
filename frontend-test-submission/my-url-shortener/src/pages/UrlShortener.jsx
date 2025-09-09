import React, { useState } from "react";
import Log from "../middleware/log";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsImV4cCI6MTc1NzQwMTg0MywiaWF0IjoxNzU3NDAwOTQzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWUxMzExMzItMGIyZC00ZTlhLTllMzctMjY5ZjNkMmZhMTk5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibG9waW50aSBzcmF2YW50aGkiLCJzdWIiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEifSwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsIm5hbWUiOiJsb3BpbnRpIHNyYXZhbnRoaSIsInJvbGxObyI6IjIyMzQxYTQ1MjgiLCJhY2Nlc3NDb2RlIjoiZWV0aE5lIiwiY2xpZW50SUQiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEiLCJjbGllbnRTZWNyZXQiOiJYV3JtZkNmeFJ2ak5heXRIIn0.kzgxvfsht-5rl7n9sF-TF4pLJYsn0qle3ayP1SJpHhI";

function UrlShortener() {
  const [urls, setUrls] = useState([{ original: "", shortcode: "", validity: 30 }]);
  const [results, setResults] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const generateShortcode = () => Math.random().toString(36).substring(2, 8);

  const handleSubmit = () => {
    const newResults = urls.map((u) => {
      const code = u.shortcode || generateShortcode();
      const now = Date.now();
      return {
        ...u,
        shortcode: code,
        createdAt: now,
        expiresAt: now + (u.validity || 30) * 60 * 1000,
        clicks: 0,
        clickHistory: [],
      };
    });

    setResults(newResults);

    newResults.forEach((r) =>
      Log("frontend", "info", "component", `Created short URL ${r.shortcode}`, token)
    );

    localStorage.setItem("shortUrls", JSON.stringify(newResults));
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      {urls.map((u, i) => (
        <div key={i}>
          <input
            placeholder="Original URL"
            value={u.original}
            onChange={(e) => handleInputChange(i, "original", e.target.value)}
          />
          <input
            placeholder="Shortcode (optional)"
            value={u.shortcode}
            onChange={(e) => handleInputChange(i, "shortcode", e.target.value)}
          />
          <input
            type="number"
            placeholder="Validity (minutes)"
            value={u.validity}
            onChange={(e) => handleInputChange(i, "validity", e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Shorten URLs</button>

      <h2>Results</h2>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            {r.original} → {window.location.origin}/{r.shortcode} (Expires: {new Date(r.expiresAt).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlShortener;
