// Fond fixe : halos bleu et violet qui dérivent lentement + grille discrète.
// Uniquement des dégradés et des transformations, sans filtre de flou.
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060f]"
    >
      <div className="absolute -left-[20%] -top-[25%] h-[70vmax] w-[70vmax] animate-drift-a bg-[radial-gradient(closest-side,rgb(37_99_235/0.28),transparent)]" />
      <div className="absolute -right-[25%] top-[20%] h-[75vmax] w-[75vmax] animate-drift-b bg-[radial-gradient(closest-side,rgb(124_58_237/0.24),transparent)]" />
      <div className="absolute -bottom-[35%] left-[15%] h-[60vmax] w-[60vmax] animate-drift-a bg-[radial-gradient(closest-side,rgb(14_165_233/0.14),transparent)]" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}
