import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <button
      className="btn btn-panel theme-toggle"
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark or light theme"
    >
      <i className={`bi ${mode === "dark" ? "bi-sun" : "bi-moon-stars"}`} />
    </button>
  );
};

export default ThemeToggle;

