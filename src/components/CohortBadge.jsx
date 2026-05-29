const CohortBadge = ({ variant = "default", className = "" }) => {
  const base = "cohort-badge";
  const variantClass =
    variant === "hero"
      ? "cohort-badge--hero"
      : variant === "footer"
        ? "cohort-badge--footer"
        : variant === "nav"
          ? "cohort-badge--nav"
          : "";
  return (
    <span className={`${base} ${variantClass} ${className}`.trim()}>
      COHORT-5 POD-10
    </span>
  );
};

export default CohortBadge;
