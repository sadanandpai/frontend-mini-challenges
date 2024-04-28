import { useContext } from "react";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { logo } from "@fmc/assets/images";
import { ThemeContext } from "../../ThemeWrapper";
import { Sun, Moon, X } from "lucide-react";
import { cn } from "@/helpers/utils";

function Navbar({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="mb-4 flex items-center justify-between bg-gray-50 p-4 shadow transition-all dark:bg-gray-950">
      <a className="flex items-center gap-2" href="/frontend-mini-challenges/">
        <img
          src={logo}
          alt="logo"
          className="h-[26px] w-[26px] md:h-10 md:w-10"
        />
        <span className="text-center font-medium text-gray-900 md:text-[1.2rem] dark:text-white">
          {title ?? "Frontend Mini Challenges"}
        </span>
      </a>

      <div className="hidden md:flex md:gap-8">
        <div className="flex items-center gap-8">{children}</div>

        <a
          href="https://github.com/sadanandpai/frontend-mini-challenges/"
          target="blank"
          className="flex h-10 w-10 items-center justify-center text-gray-900 dark:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-[26px] w-[26px] md:h-[30px] md:w-[30px]"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
        </a>
        <button
          className="border-none bg-inherit text-gray-900 dark:text-white"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>

      <div className="flex h-10 w-10 items-center justify-center text-gray-900 md:hidden dark:text-gray-200">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
          className="dark:text-white"
        />
      </div>

      <Drawer
        closeIcon={<X className={cn({ "text-white": theme === "dark" })} />}
        title={
          <div className="flex items-center justify-end gap-4 text-black">
            <button
              className={cn("border-none bg-transparent p-0 text-gray-900", {
                "text-white": theme === "dark",
              })}
              onClick={toggleTheme}
            >
              {theme === "light" ? <Sun /> : <Moon />}
            </button>
            <a
              href="https://github.com/sadanandpai/frontend-mini-challenges/"
              target="blank"
              className={cn("text-gray-900", {
                "text-white": theme === "dark",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
          </div>
        }
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={isDrawerOpen}
        width="50%"
        style={{ background: theme === "dark" ? "#192841" : "#fff" }}
      >
        <div className="p-4">
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {React.Children.map(children, (child, index) => (
              <li
                key={index}
                className={cn("[&>a]:text-lg [&>a]:text-black", {
                  "[&>a]:text-white": theme === "dark",
                })}
              >
                {child}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
