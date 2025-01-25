// components/Navigation.js
import Link from "next/link";

const Navigation = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ marginRight: "1rem" }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
