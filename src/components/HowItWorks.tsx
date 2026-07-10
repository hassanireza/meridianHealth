const STEPS = [
  {
    num: '01',
    title: 'Select Your Region',
    desc: 'Touch any region of the anatomical model to open the symptom explorer for that area. Every zone is mapped to relevant anatomical structures.',
  },
  {
    num: '02',
    title: 'Describe What You Feel',
    desc: 'Choose from a curated list of clinically defined symptoms, each developed in partnership with specialist physicians and medical researchers.',
  },
  {
    num: '03',
    title: 'Receive Informed Context',
    desc: 'Your symptom profile is matched against a database of over 400 conditions, returning ranked possibilities with specialist recommendations.',
  },
];

export function HowItWorks() {
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="section-eyebrow">
        <div className="section-line" aria-hidden="true" />
        <span className="section-eyebrow-text">The Process</span>
      </div>
      <h2 className="section-title" id="how-title">
        A precise, physician-informed methodology
      </h2>

      <div className="steps-grid">
        {STEPS.map((step) => (
          <div className="step-item" key={step.num}>
            <div className="step-num" aria-hidden="true">
              {step.num}
            </div>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
