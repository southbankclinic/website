import FloatingWhatsApp from "./FloatingWhatsApp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Your existing layout components (header, nav, etc.) */}
      {children}
      <FloatingWhatsApp />
    </>
  );
};

export default Layout; 