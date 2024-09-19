import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwicher/LanguageSwicher";

const Footer = () => {
  const { t } = useTranslation();
  const { Panel } = Collapse;

  const listFooter = [
    {
      title: t("footer.categories.title"),
      content: [
        t("footer.categories.content.graphics_design"),
        t("footer.categories.content.digital_marketing"),
        t("footer.categories.content.writing_translation"),
        t("footer.categories.content.video_animation"),
        t("footer.categories.content.music_audio"),
        t("footer.categories.content.fiverr_logo_maker"),
        t("footer.categories.content.programming_tech"),
        t("footer.categories.content.data"),
        t("footer.categories.content.business"),
        t("footer.categories.content.personal_growth_hobbies"),
        t("footer.categories.content.photography"),
        t("footer.categories.content.finance"),
        t("footer.categories.content.end_to_end_projects"),
        t("footer.categories.content.sitemap"),
      ],
    },
    {
      title: t("footer.about.title"),
      content: [
        t("footer.about.content.careers"),
        t("footer.about.content.press_news"),
        t("footer.about.content.partnerships"),
        t("footer.about.content.privacy_policy"),
        t("footer.about.content.terms_of_service"),
        t("footer.about.content.intellectual_property_claims"),
        t("footer.about.content.investor_relations"),
      ],
    },
    {
      title: t("footer.support_education.title"),
      content: [
        t("footer.support_education.content.help_support"),
        t("footer.support_education.content.trust_safety"),
        t("footer.support_education.content.quality_guide"),
        t("footer.support_education.content.selling_on_fiverr"),
        t("footer.support_education.content.buying_on_fiverr"),
        t("footer.support_education.content.fiverr_guides"),
        t("footer.support_education.content.learn"),
        t("footer.support_education.content.online_courses"),
      ],
    },
    {
      title: t("footer.community.title"),
      content: [
        t("footer.community.content.customer_success_stories"),
        t("footer.community.content.community_hub"),
        t("footer.community.content.forum"),
        t("footer.community.content.events"),
        t("footer.community.content.blog"),
        t("footer.community.content.creators"),
        t("footer.community.content.affiliates"),
        t("footer.community.content.podcast"),
        t("footer.community.content.invite_a_friend"),
        t("footer.community.content.become_a_seller"),
        t("footer.community.content.community_standards"),
      ],
    },
    {
      title: t("footer.business_solutions.title"),
      content: [
        t("footer.business_solutions.content.about_business_solutions"),
        t("footer.business_solutions.content.fiverr_pro"),
        t("footer.business_solutions.content.fiverr_certified"),
        t("footer.business_solutions.content.become_an_agency"),
        t("footer.business_solutions.content.fiverr_enterprise"),
        t("footer.business_solutions.content.clearvoice"),
        t("footer.business_solutions.content.content_marketing"),
        t("footer.business_solutions.content.working_not_working"),
        t("footer.business_solutions.content.contact_sales"),
      ],
    },
  ];

  return (
    <footer className="footer border-t mt-10">
      <div className="container px-2">
        <div className="foot_top py-5 lg:py-10">
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {listFooter.map((parent, parentIndex) => (
              <ul key={parentIndex + 1} className="space-y-4">
                <h5 className="font-bold">{parent.title}</h5>
                {parent.content.map((child, childIndex) => (
                  <li
                    key={childIndex + 1}
                    className="text-gray-500 cursor-pointer hover:underline"
                  >
                    {child}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <Collapse className="block sm:hidden" ghost expandIconPosition="end">
            {listFooter.map((parent, parentIndex) => (
              <Panel
                header={<h5 className="font-semibold">{parent.title}</h5>}
                style={{
                  fontSize: "16px",
                }}
                key={parentIndex + 1}
              >
                <ul className="space-y-4">
                  {parent.content.map((child, childIndex) => (
                    <li
                      key={childIndex + 1}
                      className="text-gray-500 cursor-pointer hover:underline"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </Collapse>
        </div>

        <hr />
        <div className="foot_bottom text-gray-500 py-5 lg:flex lg:justify-between lg: items-center">
          <div className="bottom_left flex-col lg:flex-row flex justify-center items-center space-x-5">
            <svg
              width="91"
              height="27"
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
              </g>
            </svg>
            <p className="text-[#b5b6ba] mt-5 lg:mt-0">
              © Fiverr International Ltd. 2024
            </p>
          </div>
          <div className="bottom_right pt-4 lg:flex lg:space-x-5">
            <div className="social flex justify-center">
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-tiktok text-xl"></i>
              </Link>
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-instagram text-xl"></i>
              </Link>
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </Link>
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-facebook text-xl"></i>
              </Link>
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-pinterest text-xl"></i>
              </Link>
              <Link className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 duration-300">
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-5">
              <LanguageSwitcher />
              <button className="font-semibold px-3 py-2 rounded-full hover:bg-gray-100 duration-300">
                $ USD
              </button>
              <span
                className="fill-[#74767e] cursor-pointer"
                aria-hidden="true"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="15.5"
                    fill="white"
                    stroke="currentColor"
                    className="circle-wrapper"
                  ></circle>
                  <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"></path>
                  <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
