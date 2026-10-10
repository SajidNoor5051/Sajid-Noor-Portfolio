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
        <SectionHeading>Research Experience & Publications</SectionHeading>

        <div className="mb-8">
          <SubHeading>Research Experience</SubHeading>

          <div className="space-y-6">
            {/* Thesis */}
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <p className="font-semibold text-black text-sm md:text-base">
                  Undergraduate Thesis
                </p>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  2025 – Present
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Department of Computer Science and Engineering, BUET
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                My undergraduate thesis on{" "}
                <span className="text-gray-600 italic">
                  Aggressive Driving Detection using Machine Learning
                </span>
                , supervised by{" "}
                <span className="text-gray-600 italic">
                  Dr. A.K.M Ashikur Rahman
                </span>
                , explored the areas of machine learning, featurer engineering
                and applied AI.
              </p>
            </div>

            {/* Lab */}
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <p className="font-semibold text-black text-sm md:text-base">
                  Next-Generation Computing Lab, BUET CSE
                </p>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  2023 – Present
                </span>
              </div>
              <ul className="space-y-1.5 text-base text-gray-800 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                  <span>
                    Collected data from Rickshaw-pullers in Dhaka using wearable
                    sensors, conducted interviews, and performed thematic
                    analysis for ongoing lab projects.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">·</span>
                  <span>
                    Analyzed and visualized data on the impact of extreme heat
                    exposure on rickshaw pullers, including data preprocessing
                    and interpretation of results.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Publications ── */}
        <div>
          <div className="mb-8">
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
                    <span className="text-gray-400 text-sm whitespace-nowrap">
                      2023 – 2025
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Rahaman, M., Hasana, M., Rahman, S. S.,{" "}
                    <span className="font-semibold text-gray-800">
                      Noor, M. S. M.
                    </span>
                    , Abedin, R. R., Tahmid, M. T., Parris, D. W., Choudhury,
                    T., Al Islam, A. B. M., &amp; Rahman, T.
                  </p>
                  <p className="text-sm text-cyan-700 italic mb-0">
                    Proceedings of the ACM on Interactive, Mobile, Wearable and
                    Ubiquitous Technologies
                  </p>
                  <p className="text-sm text-cyan-700 italic mb-3">
                    DOI: 10.1145/3770712
                  </p>
                  <p className="text-base text-gray-800 leading-relaxed mb-3">
                    This paper studies how extreme heat affects the physiology
                    of rickshaw pullers in Dhaka, using wearable sensor data
                    from 100 pullers and interviews with 12 of them. It develops
                    a Linear Gaussian Bayesian Network to predict key
                    physiological biomarkers from activity, weather, and
                    demographic features, and combines it with projections from
                    18 CMIP6 climate models to assess survivability for both
                    current (2023-2025) and future (2026-2100) years. The
                    results show that 32% of pullers already face high
                    heat-exposure risk, with projections pointing to a sharp
                    rise in occupational heat burden in the coming decades.
                    Additionally, a thematic analysis of the interviews shows
                    that pullers recognize their growing climate vulnerability
                    and are concerned about its effects on their health and
                    occupational survivability.
                  </p>
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

              <div>
                <StatusBadge type="published" />
                <div className="pl-4 border-l-2 border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <p className="font-semibold text-black text-sm md:text-base leading-snug">
                      Real-Time Machine Learning Based Detection of Aggressive
                      Driving using Feature Optimization
                    </p>
                    <span className="text-gray-400 text-sm whitespace-nowrap">
                      2025 – 2026
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    Ibnul Islam,{" "}
                    <span className="font-semibold text-gray-800">
                      MD Sajid Mostafiz Noor
                    </span>
                    , Ashikur Rahman, Raqeebir Rab, Abderrahmane Leshob
                  </p>
                  <p className="text-sm text-cyan-700 italic mb-0">
                    2026 International Conference on Intelligent Multimedia,
                    Networking, and Security (IMNS)
                  </p>
                  <p className="text-sm text-cyan-700 italic mb-3">
                    DOI: 10.1109/IMNS67862.2026.11655308
                  </p>
                  <p className="text-base text-gray-800 leading-relaxed mb-3">
                    This paper proposes a real-time machine learning framework
                    for detecting aggressive driving using optimized sensor
                    features. It compares three feature selection approaches
                    (Feature Inclusion, Feature Exclusion, and Feature Inclusion
                    with Group Sequencing) to reduce input dimensionality (from
                    32 features to 13 key features), achieving 98.54% accuracy
                    with 66% fewer features. Additionally, it introduces a
                    feature-sparsity-aware inference mechanism that maintains
                    reliable predictions when sensor data are missing.
                  </p>
                  <a
                    href="https://ieeexplore.ieee.org/document/11655308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    View Paper →
                  </a>
                </div>
              </div>

              {/* Under Review */}
              <div>
                <StatusBadge type="published" />
                <div className="pl-4 border-l-2 border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <p className="font-semibold text-black text-sm md:text-base leading-snug">
                      From Wearable Data to Risk Literacy: Visualizing
                      Physiological Heat Stress for Rickshaw Pullers in Dhaka
                    </p>

                    <span className="text-gray-400 text-sm whitespace-nowrap">
                      2025 – 2026
                    </span>
                  </div>
                  <p className="text-sm text-cyan-700 italic mb-1">
                    Proceedings of the 2026 ACM International Symposium on
                    Wearable Computers (ISWC '26)
                  </p>
                  <p className="text-sm text-cyan-700 italic mb-3">
                    DOI: 10.1145/3830727.3834827
                  </p>
                  <p className="text-base text-gray-800 leading-relaxed mb-3">
                    This study designs simple, threshold-based visualizations
                    that communicate wearable-derived physiological heat-stress
                    risks from porevious studies to low-literacy informal
                    workers. In a mixed-method study with 11 rickshaw pullers in
                    Dhaka, pre- and post-assessments capture how their perceived
                    heat risk shifted after viewing the visualizations.
                    Moreover, an analysis of interview data examines how workers
                    interpret the visualized information, yielding design
                    insights for just-in-time and post-hoc heat-safety
                    interventions.
                  </p>
                  <a
                    href="https://dl.acm.org/doi/10.1145/3830727.3834827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    View Paper →
                  </a>
                </div>
              </div>

              <div>
                <StatusBadge type="review" />
                <div className="pl-4 border-l-2 border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <p className="font-semibold text-black text-sm md:text-base leading-snug">
                      From Wearable Data to Risk Literacy: Visualizing
                      Physiological Heat Stress for Rickshaw Pullers in Dhaka
                    </p>

                    <span className="text-gray-400 text-sm whitespace-nowrap">
                      2025 – 2026
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic mb-1">
                    Under Review at ACM CHI 2027
                  </p>

                  <p className="text-base text-gray-800 leading-relaxed mb-3">
                    This case study extends our prior UbiComp/ISWC work by
                    exploring how physiological heat-stress data, specifically
                    relative cardiac cost (RCC), can be translated into
                    culturally familiar rickshaw art for Dhaka's rickshaw
                    pullers. It compares four approaches to creating the artwork
                    (artist-researcher co-design, artist only, researcher-AI,
                    and artist-AI) and examines how rickshaw pullers interpret each
                    through five focus groups with 18 participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
