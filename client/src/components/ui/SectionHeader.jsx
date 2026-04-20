const SectionHeader = ({ eyebrow, title, description, align = "start" }) => (
  <div className={`mb-5 text-${align}`}>
    <p className="eyebrow mb-3">{eyebrow}</p>
    <h2 className="section-title mb-3">{title}</h2>
    {description ? (
      <p
        className={`text-muted-custom m-0 ${
          align === "center" ? "col-lg-8 mx-auto" : "col-lg-8"
        }`}
      >
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionHeader;
