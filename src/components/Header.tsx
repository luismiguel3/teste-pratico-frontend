interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`w-full bg-white py-20 z-10 shadow-figma-2 ${className}`}>
      <h1 className="text-2xl px-12 md:px-18">
        <strong className="font-extrabold">Be</strong>Talent
      </h1>
    </header>
  );
}