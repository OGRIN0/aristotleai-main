import React, { useState, useEffect } from "react";
import useTheme from "../../context";

function Changelog() {
  const { theme } = useTheme();

  const [color, setColor] = useState("bg-gray-800");

  useEffect(() => {
    if (theme == "dark") setColor("bg-gray-800");
    else if (theme == "light") setColor("bg-gray-800");
    else if (theme == "violet") setColor("bg-gray-800");
    else if (theme == "cyan") {
      setColor("bg-gray-800");
    } else if (theme == "blue") {
      setColor("bg-gray-800");
    } else if (theme == "lime") {
      setColor("bg-gray-800");
    }
  }, [theme]);

  const changes = [
    {
      version: "1.15.0 - Eurus",
      date: " - 12 February, 2024",
      descriptions: [
        {
          description: "New",
          content: [
            "PAGE: public/dashboard/travel-agency.html",
            "PAGE: public/apps/travel-agency/landing.html",
            "PAGE: public/apps/travel-agency/hotel/admin/add-property.html",
            "PAGE: public/apps/travel-agency/hotel/admin/room-listing.html",
            "JS: src/js/theme/mapbox.js",
            "JS: src/js/theme/flight-map.js",
            "JS: src/js/theme/typed.js",
            "JS: src/js/theme/nouislider.js",
            "JS: src/js/theme/price-tier-form.js",
            "Utility classes",
          ],
        },
        {
          description: "Link",
          content: [
            "link-body",
            "link-body-secondary",
            "link-body-highlight",
            "link-body-quaternary",
            "link-body-tertiary",
          ],
        },
        {
          description: "Fix",
          content: [
            "Phoenix button disabled issue",
            "Vertical navbar collapse issue",
            "Horizontal navbar issue on icon hover",
            "Other minor bugs",
          ],
        },
      ],
    },
    {
      version: "1.14.0 - Elpis",
      date: " - 7 December, 2023",
      descriptions: [
        {
          description: "New",
          content: [
            "New theme color shades",
            "DOC: Color see documentation",
            "Utility classes",
          ],
        },
        {
          description: "Text",
          content: [
            "text-body-highlight",
            "text-body-quaternary",
            "text-body-hover",
            "text-body-secondary-hover",
            "text-body-tertiary-hover",
            "text-body-quaternary-hover",
            "text-body-highlight-hover",
          ],
        },
        {
          description: "Update",
          content: [
            "Bootstrap to 5.3.2",
            "All SCSS files are updated",
            "Almost all JS files are updated",
            "DOC: Styling see documentation",
            "DOC: Dark Mode see documentation",
          ],
        },
      ],
    },
    {
      version: "v1.13.0 - Auxo",
      date: " - 18 June, 2023",
      descriptions: [
        {
          description: "New",
          content: [
            "PAGE: public/pages/faq/faq-tab.html",
            "PAGE: public/pages/errors/403.html",
            "PAGE: public/pages/authentication/simple/2FA.html",
            "PAGE: public/pages/authentication/split/2FA.html",
            "PAGE: public/pages/authentication/card/2FA.html",
            "JS: src/js/theme/faq-tab.js",
            "DOC: public/modules/components/sortable.html",
          ],
        },
        {
          description: "Update",
          content: [
            "Added text-decoration-underline at links.",
            "JS: src/js/theme/calendar/app-calendar.js",
          ],
        },
        {
          description: "Fix",
          content: ["Advance table issue fixed", "Other minor bugs"],
        },
      ],
    },
    {
      version: "v1.12.0 - Notus",
      date: " - 15 May, 2023",
      descriptions: [
        {
          description: "New",
          content: [
            "PAGE: public/apps/crm/deal-details.html",
            "PAGE: public/apps/crm/analytics.html",
            "PAGE: public/modules/forms/advance/emoji-button.html",
            "FEATURE: Chat Demo (floating widget)",
            "FEATURE: Emoji button (picmo) dark mode version added",
          ],
        },
        {
          description: "Fix",
          content: [
            "Topnav dropdown spacing issue",
            "Modal body scrolling issue",
            "Other minor bugs",
          ],
        },
      ],
    },
    {
      version: "v1.11.0 - Artemis",
      date: " - 03 April, 2023",
      descriptions: [
        {
          description: "New",
          content: [
            "PAGE: public/apps/crm/deals.html",
            "PAGE: public/apps/crm/reports-details.html",
            "PAGE: public/apps/kanban/kanban.html",
            "PAGE: public/apps/kanban/create-kanban-board.html",
            "PAGE: public/modules/echarts/line-charts.html",
            "PAGE: public/modules/echarts/bar-charts.html",
            "DOC: public/modules/echarts/how-to-use.html",
            "DOC: public/modules/utilities/stacks.html",
            "DOC: public/modules/utilities/grid.html",
            "PLUGIN: Sortablejs",
            "JS: src/js/theme/randomColor.js",
            "JS: src/js/theme/copyLink.js",
          ],
        },
        {
          description: "Update",
          content: ["DOC: public/modules/tables/advance-tables.html"],
        },
      ],
    },
  ];

  const [selectedVersion, setSelectedVersion] = useState(null);

  return (
    <div className=" mt-7 py-5 mb-7">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className={`${color}` + " card-header  text-white"}>
              <h2 className="card-title mb-0">Changelog</h2>
            </div>
            <div className="card-body">
              {changes.map((change, index) => (
                <div
                  key={index}
                  className="accordion mb-3"
                  id={`accordion-${index}`}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${index}`}>
                      <button
                        className={`accordion-button ${
                          selectedVersion === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() =>
                          setSelectedVersion(
                            selectedVersion === index ? null : index
                          )
                        }
                        aria-expanded={
                          selectedVersion === index ? "true" : "false"
                        }
                        aria-controls={`collapse-${index}`}
                      >
                        <span className="badge bg-secondary me-2">
                          Version {change.version}
                        </span>
                        <span className="text-black">{change.date}</span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${
                        selectedVersion === index ? "show" : ""
                      }`}
                      aria-labelledby={`heading-${index}`}
                      data-bs-parent={`#accordion-${index}`}
                    >
                      <div
                        className={`accordion-body border border-dark p-3 ${
                          selectedVersion === index ? "fade-in" : ""
                        }`}
                      >
                        {selectedVersion === index &&
                          change.descriptions.map((desc, descIndex) => (
                            <div key={descIndex}>
                              <p className="fw-bold">{desc.description}</p>
                              <ul className="list-unstyled">
                                {desc.content.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    {/* Add a span around the item after semicolon */}
                                    {item.includes(":") ? (
                                      <>
                                        <span className="text-black">
                                          {item.split(":")[0]}
                                        </span>
                                        :
                                        <span className="text-danger">
                                          {item.split(":")[1]}
                                        </span>
                                      </>
                                    ) : (
                                      <span className="text-black">{item}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelog;
