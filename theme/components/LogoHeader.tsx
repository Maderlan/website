import MainIcon from "@Components/icon/MainIcon";
import { ThemeContext, usePageData } from "rspress/runtime";
import { FC, useContext } from "react";
import { Link } from "rspress/theme";

export const LogoHeader: FC = () => {
  const { theme } = useContext(ThemeContext);
  const pageData = usePageData();
  const defaultLang = pageData.siteData.lang ?? "";
  const lang = pageData.page.lang;
  const darkMode = theme === "dark";
  const color = darkMode ? "#fff" : "#414141";
  const highlightColor = darkMode ? "#0AD7AF" : "#02BFA5";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <Link
        href={lang === defaultLang ? "/" : lang}
        className="flex items-center w-full h-full text-base font-semibold transition-opacity duration-300 hover:opacity-60"
      >
        <MainIcon width={40} height={40} />
        <span style={{ fontWeight: 800, fontSize: "30px", color }}>
          GZ<span style={{ color: highlightColor }}>::</span>CTF
        </span>
      </Link>
    </div>
  );
};

export default LogoHeader;
