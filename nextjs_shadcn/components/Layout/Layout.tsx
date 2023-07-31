export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p className="text-center text-gray-300 ">©by Omed 2023-2024</p>
      </footer>
    </div>
  );
}
