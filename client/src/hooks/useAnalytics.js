import { useEffect, useState } from "react";
import { getAnalytics } from "../services/analyticsService";

export default function useAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getAnalytics();
      setAnalytics(data);
    };

    load();

    const timer = setInterval(load, 10000);

    return () => clearInterval(timer);
  }, []);

  return analytics;
}