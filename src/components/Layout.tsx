import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`flex flex-col justify-baseline min-h-screen bg-gray-00 font-display w-full ${className}`}>
      <Header />
      <main className="w-full py-10 px-12 md:px-18">
        {children}
      </main>
    </div>
  );
}