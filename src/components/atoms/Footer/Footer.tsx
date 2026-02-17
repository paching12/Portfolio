import Logo from "@assets/JJPD_optimized.svg";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 flex flex-col items-center gap-4 bg-[var(--color-background)]/80 backdrop-blur-sm select-none">
      <img
        src={Logo}
        alt="JJPD Logo"
        className="w-16 opacity-80 hover:opacity-100 transition-opacity"
      />
      <p className="text-[var(--color-text-muted)] text-sm text-center">
        © {new Date().getFullYear()} JJPD. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
