import React, { useState } from 'react';
import { CorporateDoxPage } from '../../../../locales/types';
import * as Shared from '@/shared';

const InfoDocs: React.FC<CorporateDoxPage> = ({ title, factory, code, sections, dateLang }) => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
  // function for parce date
  const parseDate = (str: string | undefined): number => {
    if (!str) return 0;
    // Формат "MM.DD.YYYY"
    if (str.includes('.')) {
      const [day, month, year] = str.split('.').map(Number);
      return new Date(year, month - 1, day).getTime();
    }

    // Формат "MM/DD/YYYY"
    if (str.includes('/')) {
      const [day, month, year] = str.split('/').map(Number);
      return new Date(year, month - 1, day).getTime();
    }

    // Попытка создать напрямую (например, ISO: "YYYY-MM-DD")
    const parsed = new Date(str).getTime();
    return isNaN(parsed) ? 0 : parsed;
  };

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        newState[Number(key)] = false;
      });
      newState[index] = !prev[index];
      return newState;
    });
  };

  return (
    <div className="space-y-8">
      <Shared.Heading level="h1" text={title} style="text-[#ef8535]" />
      <Shared.Heading level="h2" text={factory} />
      <Shared.Paragraph text={code} />

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border border-[#ef8535] rounded-lg overflow-hidden transition-all">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center p-4 bg-[#2d2d2d] hover:bg-[#4c4b4b] transition-colors"
              aria-expanded={openSections[index]}
              aria-controls={`section-${index}`}
            >
              <Shared.Heading level="h3" text={section.title} style="text-[#ef8535] font-semibold" />
              <span className="text-[#ef8535] transition-transform duration-200">
                {openSections[index] ? '−' : '+'}
              </span>
            </button>

            <div
              id={`section-${index}`}
              className={`transition-all duration-200 overflow-hidden ${
                openSections[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#9f9f9f #2c2c2c' }}
            >
              <div className="p-4 overflow-y-auto max-h-[500px]">
                {(section.type === 'regular' ||
                  section.type === 'special' ||
                  section.type === 'shareholders' ||
                  section.type === 'other') && (
                  <div className="space-y-4">
                    {section.documents
                      ?.slice()
                      .sort((a, b) => {
                        const dateA = parseDate(a.date[0]?.value);
                        const dateB = parseDate(b.date[0]?.value);

                        return dateB - dateA;
                      })
                      .map((doc, docIndex) => (
                        <div key={docIndex} className="border-b border-gray-200 pb-4 last:border-0">
                          <h4 className="font-medium text-lg">{doc.title}</h4>

                          {doc.date.map((d, dIndex) => (
                            <p key={dIndex} className="text-sm text-gray-400 mb-2">
                              {dateLang}: {d.value}
                            </p>
                          ))}
                          <div className="flex gap-4  flex-wrap">
                            {doc.formats.map((format, formatIndex) => (
                              <a
                                key={formatIndex}
                                href={format.url}
                                className="text-[#ef8535] hover:underline flex items-center gap-1"
                                download
                              >
                                <span>{format.type}</span>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDocs;
