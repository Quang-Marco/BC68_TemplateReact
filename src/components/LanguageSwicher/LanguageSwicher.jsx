import { useTranslation } from "react-i18next";
import { Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const LanguageSwitcher = ({ trigger = ["hover"] }) => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const items = [
    {
      key: "en",
      label: (
        <button onClick={handleChange} value="en">
          English
        </button>
      ),
    },
    {
      key: "vi",
      label: (
        <button onClick={handleChange} value="vi">
          Tiếng Việt
        </button>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={trigger}
      className="cursor-pointer font-semibold text-gray-500 hover:text-green-500 duration-300"
    >
      <Space>
        <GlobalOutlined />
        {i18n.language === "en" ? "English" : "Tiếng Việt"}
      </Space>
    </Dropdown>
  );
};

export default LanguageSwitcher;
