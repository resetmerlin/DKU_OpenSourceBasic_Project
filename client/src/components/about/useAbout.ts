import { useEffect, useState } from "react";
import axios from "axios";

export function useAbout() {
  const [data, setData] = useState({ heading: "", paragraphs: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/about")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
