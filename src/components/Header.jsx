import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import NavMobile from "./NavMobile";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import fetchTopics from "../utils/fetchTopics";

export default function Header({user, currentTopic, setCurrentTopic}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topics, setTopics] = useState(true);
  const [topicsLoading, setTopicsLoading] = useState(true);
  const navigate = useNavigate();
  // let displayMobileMenu = "hidden";

  useEffect(() => {
    fetchTopics()
      .then((response) => {
        setTopics(response.data.topics);
        setTopicsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          navigate(`/error/topics/${error.response.status}`);
        } else {
          navigate("/error/articles/noresponse");
        }
      });
  }, []);

  if (topicsLoading) return <p>Loading Header...</p>;

    // if (mobileMenuOpen) {
    //   displayMobileMenu = ""
    // } else {
    //   displayMobileMenu = "hidden"
    // }

  return (
    <>
      <section className="flex items-end flex-row bg-black p-4">
        <div className="xs:visible lg:invisible">
          <NavMobile
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentTopic={currentTopic} 
            setCurrentTopic={setCurrentTopic}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="font-sans text-2xl font-black tracking-wide text-white">
            Life in Motion
          </h1>
        </div>
        <div  className="xs:invisible xs:w-0 lg:visible lg:w-auto">
        <NavBar currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>
        </div>
        <div className="basis-1/2">
          <p className="font-sans text-sm font-black tracking-wide text-white text-right">
            logged in as: {user.username}
          </p>
        </div>
      </section>
      <div>
        <MobileMenu topics={topics} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setCurrentTopic={setCurrentTopic}/>
      </div>
    </>
  );
}
