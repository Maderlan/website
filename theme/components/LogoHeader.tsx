import MainIcon from "@Components/icon/MainIcon";
import { ThemeContext, usePageData } from "rspress/runtime";
import { FC, useContext } from "react";
import { Link } from "rspress/theme";

export const LogoHeader: FC = () => {
  const { theme } = useContext(ThemeContext);
  const pageData = usePageData();
  const defaultLang = pageData.siteData.lang ?? "";
  const lang = pageData.page.lang;
  const lightMode = theme === "light";
  const color = lightMode ? "#414141" : "#fff";
  const highlightColor = lightMode ? "#02BFA5" : "#0AD7AF";

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
