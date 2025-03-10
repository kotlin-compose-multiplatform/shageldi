import { useToken } from "../../theme/config-theme";

const Privacy = () => {
  const { token } = useToken();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.38 8.94C6.94 9.58 6 11.02 6 12.6V22C6 33.1 13.68 43.48 24 46C34.32 43.48 42 33.1 42 22V12.6C42 11.02 41.06 9.58 39.62 8.94L25.62 2.72C24.58 2.26 23.4 2.26 22.38 2.72L8.38 8.94ZM24 14C25.1 14 26 14.9 26 16C26 17.1 25.1 18 24 18C22.9 18 22 17.1 22 16C22 14.9 22.9 14 24 14ZM24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22Z"
        fill={token.colorText}
      />
    </svg>
  );
};

export default Privacy;
