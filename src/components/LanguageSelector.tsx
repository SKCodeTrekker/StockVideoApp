import React, { useState } from "react";

interface LanguageOption {
  code: string;
  label: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "jp", label: "Japanese" },
  { code: "zh", label: "Chinese" },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(
    languages[0] // Default to English
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Add any language change logic here (e.g., update the app's i18n state)
  };

  return (
    <div className="relative">
      {/* Language Selector Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 text-gray-500 hover:text-gray-900"
      >
        🌐 <span className="ml-1 hidden md:block">{selectedLanguage.label}</span>
        <svg
          className={`w-4 h-4 ml-1 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
          {languages.map((language) => (
            <li
              key={language.code}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                selectedLanguage.code === language.code ? "bg-gray-100" : ""
              }`}
              onClick={() => selectLanguage(language)}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
