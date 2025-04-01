export default function Navbar() {
  return (
    <div className="flex justify-between m-10">
      <div className="">Logo</div>
      <nav>
        <ul className="flex gap-30">
          <li>About</li>
          <li>Programs</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Instructor</li>
        </ul>
      </nav>
      <div className="">Get Started</div>
    </div>
  );
}
