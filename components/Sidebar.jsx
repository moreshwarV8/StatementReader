// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/contact">Contact</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
