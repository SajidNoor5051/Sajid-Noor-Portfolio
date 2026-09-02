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
    <section id="experience" className="py-20 bg-portfolio-background">
      <div className="project-card container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl font-style">

        <SectionHeading>Work Experience</SectionHeading>

        {/* ── Research Experience ── */}
        <div className="mb-2">
          
          <div className="space-y-6">
            {/* Thesis */}
            <div className="pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <p className="font-semibold text-black text-sm md:text-base">
                  Lecturer
                </p>
                <span className="text-gray-400 text-sm whitespace-nowrap">Aug 2026 – Present</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Department of Information and Communication Engineering, Daffodil International University
              </p>
              
            </div>
          </div>
        </div>

        

        

      </div>
    </section>
  );
};

export default Research;
