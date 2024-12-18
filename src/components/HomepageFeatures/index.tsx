import { useEffect } from "react";

export default function HomepageFeatures(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://cloud.terpusat.com";
    }, 1000);
  }, []);

  return <>Loading...</>;
}
