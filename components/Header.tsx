import Image from "next/image";

export function Header() {
  return <header className="header"><Image src="/logo-header.png" alt="Consultation with Sashi" width={200} height={108} priority /></header>;
}
