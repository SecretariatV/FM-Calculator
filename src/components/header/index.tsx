import { useEffect, useRef, useState } from "react";
import S from "./index.module.scss";

const names = ["theme1", "theme2", "theme3"];

export const Header = () => {
  const [theme, setTheme] = useState<number>(0);
  const btnRef = useRef<HTMLDivElement>(null);

  const handleChange = (theme: number) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.style.transform = `translateX(${theme * 100}%)`;
    }
  }, [theme]);

  return (
    <div className={S.body}>
      <div className={S.toggle}>
        <div className={S.wrapper}>
          <div className="toggle_btn" ref={btnRef}>
            <div className="btn" />
          </div>
          {names.map((name, index) => (
            <>
              <input
                key={index}
                type="radio"
                name={name}
                id=""
                checked={index === theme}
              />
              <label htmlFor={name} onClick={() => handleChange(index)} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
