import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MobileMenu({
  topics,
  mobileMenuOpen,
  setMobileMenuOpen,
  setCurrentTopic,
}) {
  const navigate = useNavigate();
  const [displayMobileMenu, setDisplayMobileMenu] = useState("hidden");

  useEffect(() => {
    if (mobileMenuOpen) {
      setDisplayMobileMenu("");
    } else {
      setDisplayMobileMenu("hidden");
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <div className={`${displayMobileMenu}`}>
        <button
          className="text-lg text-white text-left bg-black pl-6 w-40 focus:outline-none hover:font-bold dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          key="home"
          onClick={() => {
            setCurrentTopic("home");
            setMobileMenuOpen(false);
            navigate("/");
          }}
        >
          home
        </button>
        {topics.map((topic) => {
          return (
            <div>
              <button
                className="text-lg text-white text-left bg-black pl-6 w-40 focus:outline-none hover:font-bold dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                key={topic.slug}
                onClick={() => {
                  setCurrentTopic(topic.slug);
                  setMobileMenuOpen(false);
                  navigate(`/articles/topics/${topic.slug}`);
                }}
              >
                {topic.slug}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
