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
    setDisplayMobileMenu("")
  } else {
    setDisplayMobileMenu("hidden")
  }
},[mobileMenuOpen]);

  return (
    <>
      <div
        className={`${displayMobileMenu}`}
      >
        <button
          className="text-gray-200 bg-gray-800 focus:outline-none focus:font-bold focus:text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          key="home"
          onClick={() => {
            setCurrentTopic("all");
            setMobileMenuOpen(false);
            navigate("/");
          }}
        >
          home
        </button>
        {topics.map((topic) => {
          return (
            <div>
              <br></br>
              <button
                className="text-gray-200 bg-gray-800 focus:outline-none focus:font-bold focus:text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
