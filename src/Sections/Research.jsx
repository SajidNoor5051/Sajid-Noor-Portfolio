import React from "react";

const SectionHeading = ({ children }) => (
  <h2 className="flex items-center gap-3 text-sm font-bold text-gray-800 uppercase tracking-widest mb-8">
    <span className="w-5 h-0.5 bg-blue-400 inline-block flex-shrink-0" />
    {children}
    <span className="flex-1 h-px bg-gray-200 inline-block" />
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">
    {children}
  </h3>
);

const StatusBadge = ({ type }) => {
  const styles = {
    published: "bg-green-50 text-green-700 border-green-200",
    accepted: "bg-blue-50 text-blue-700 border-blue-200",
    review: "bg-gray-100 text-gray-500 border-gray-200",
  };
  const labels = {
    published: "Published",
    accepted: "Accepted",
    review: "Under Review",
  };
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 border rounded-sm flex-shrink-0 ${styles[type]}`}
      >
        {labels[type]}
      </span>
      <span className="flex-1 h-px bg-gray-100" />
    </div>
  );
};

const Research = () => {
  return (
    <section id="research" className="py-20 bg-portfolio-background">
      <div className="project-card container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl font-style">

        <SectionHeading>Research &amp; Publications</SectionHeading>

        {/* ── Research Experience ── */}
        <div className="mb-10">
          <SubHeading>Research Experience</SubHeading>

          <div className="space-y-6">
            {/* Thesis */}
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <p className="font-semibold text-black text-sm md:text-base">
                  Undergraduate Thesis
                </p>
                <span className="text-gray-400 text-sm whitespace-nowrap">2025 – Present</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Department of Computer Science and Engineering, BUET
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                Currently working on my undergraduate thesis in the area of
                machine learning and intelligent systems. My thesis explores
                approaches to{" "}
                <span className="text-gray-600 italic">Machine Learning Based Detection of Driving Behaviour using Feature Optimiztion</span>,
                supervised by{" "}
                <span className="text-gray-600 italic">Dr. A.K.M Ashikur Rahman</span>.
              </p>
            </div>

            {/* Lab */}
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <p className="font-semibold text-black text-sm md:text-base">
                  Next-Generation Computing Lab, BUET CSE
                </p>
                <span className="text-gray-400 text-sm whitespace-nowrap">2023 – Present</span>
              </div>
              <ul className="space-y-1.5 text-base text-gray-800 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                  <span>
                    Collected data using wearable sensors, performed thematic
                    analysis, and surveys for ongoing lab projects.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                  <span>
                    Analyzed and visualized data on the heat impact on rickshaw
                    pullers, including data preprocessing and interpretation of
                    results.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Publications ── */}
        <div>
          <SubHeading>Publications</SubHeading>

          <div className="space-y-8">

            {/* Published */}
            <div>
              <StatusBadge type="published" />
              <div className="pl-4 border-l-2 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <p className="font-semibold text-black text-sm md:text-base leading-snug">
                    Forecasting Occupational Survivability of Rickshaw Pullers
                    Under a Changing Climate
                  </p>
                  <span className="text-gray-400 text-sm whitespace-nowrap">2023 – 2025</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Rahaman, M., Hasana, M., Rahman, S. S.,{" "}
                  <span className="font-semibold text-gray-800">Noor, M. S. M.</span>
                  , Abedin, R. R., Tahmid, M. T., Parris, D. W., Choudhury, T.,
                  Al Islam, A. B. M., &amp; Rahman, T.
                </p>
                <p className="text-sm text-gray-500 italic mb-3">
                  ACM IMWUT &mdash; doi: 10.1145/3770712
                </p>
                <ul className="space-y-1.5 text-base text-gray-800 leading-relaxed mb-3">
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Analyzed physiological stress on rickshaw pullers under
                      extreme heat using wearable sensor data.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Applied Bayesian regression to model occupational heat-risk
                      and survivability; integrated CMIP6 climate projections to
                      forecast long-term climate impact.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Conducted data preprocessing, statistical modeling, and
                      result validation; performed thematic analysis using
                      qualitative data from structured interviews.
                    </span>
                  </li>
                </ul>
                <a
                  href="https://doi.org/10.1145/3770712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                >
                  View Paper →
                </a>
              </div>
            </div>

            {/* Accepted */}
            <div>
              <StatusBadge type="accepted" />
              <div className="pl-4 border-l-2 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <p className="font-semibold text-black text-sm md:text-base leading-snug">
                    Real-Time Machine Learning Based Detection of Aggressive
                    Driving using Feature Optimization
                  </p>
                  <span className="text-gray-400 text-sm whitespace-nowrap">2025 – 2026</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Ibnul Islam,{" "}
                  <span className="font-semibold text-gray-800">
                    MD Sajid Mostafiz Noor
                  </span>
                  , Ashikur Rahman, Raqeebir Rab, Abderrahmane Leshob
                </p>
                <p className="text-sm text-gray-500 italic mb-3">
                  International Conference on Intelligent Multimedia, Networking,
                  and Security — Atlanta, Georgia, USA
                </p>
                <ul className="space-y-1.5 text-base text-gray-800 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Developed a real-time aggressive driving detection system
                      using optimized sensor features.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Applied three feature selection algorithms — Feature
                      Inclusion, Feature Exclusion, and Feature Inclusion with
                      Group Sequencing — to reduce input dimensionality.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                    <span>
                      Achieved 98.54% accuracy with a 66% reduction in feature
                      count; implemented a feature-sparsity aware inference
                      mechanism for reliable prediction under missing sensor data.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Under Review */}
            <div>
              <StatusBadge type="review" />
              <div className="pl-4 border-l-2 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <p className="font-semibold text-black text-sm md:text-base leading-snug">
                    From Wearable Data to Risk Literacy: Visualizing
                    Physiological Heat Stress for Rickshaw Pullers in Dhaka
                  </p>
                  <span className="text-gray-400 text-sm whitespace-nowrap">2026</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-1">
                  Submitted to UbiComp / ISWC 2026 — Shanghai, China
                </p>
                <p className="text-xs text-gray-400">
                  Anonymous submission — authors not disclosed.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Research;
