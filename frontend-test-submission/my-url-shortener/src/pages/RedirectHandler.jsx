import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RedirectHandler() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("shortUrls") || "[]");
    const target = urls.find((u) => u.shortcode === shortcode);

    if (!target) {
      alert("Short URL not found!");
      return navigate("/");
    }

    if (Date.now() > target.expiresAt) {
      alert("Short URL expired!");
      return navigate("/");
    }

    target.clicks += 1;
    target.clickHistory.push({ timestamp: Date.now(), source: "localhost", location: "Unknown" });
    localStorage.setItem("shortUrls", JSON.stringify(urls));

    window.location.href = target.original;
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
}

export default RedirectHandler;
