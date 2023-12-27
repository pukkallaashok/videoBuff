import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode, toggleSideBar } from "../utils/appSlice";
import { getSearchQuery, getSuggestions } from "../utils/suggestionSlice";
import { getCacheData } from "../utils/cacheSlice";
import "./VideoConatiner";
import { getFilteredVideo } from "../utils/videoSlice";
import { profileImg } from "../utils/constants";
import videoImg from "../VideoDump.jpg";
const Head = () => {
  //const searchQuery = useSelector((store) => store.suggestions.searchQuery);

  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchQuery, setsearchQuery] = useState("");
  //console.log(searchQuery);

  const dispatch = useDispatch();

  const searchSuggestions = useSelector(
    (store) => store.suggestions.searchSuggestions
  );

  const cacheSuggestions = useSelector((store) => store.search);

  const searchFilter = useSelector((store) => store.video.filteredVideo);

  const Mode = useSelector((store) => store.app.mode);

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  };

  const handleSearch = () => {
    const search = searchFilter.filter((search) =>
      search.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(getFilteredVideo(search));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSuggestions[searchQuery]) {
        dispatch(getSuggestions(cacheSuggestions[searchQuery]));
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();

    dispatch(getSuggestions(json[1]));

    dispatch(
      getCacheData({
        [searchQuery]: json[1],
      })
    );
    //dispatch(getSearchQuery(searchQuery));
  };

  console.log(searchQuery);

  return (
    <div
      className={
        "flex flex-row md:grid md:grid-flow-col shadow-lg w-screen " +
        (!Mode && " bg-black text-white border border-b-white")
      }
    >
      <div className="flex md:col-span-1 md:m-2">
        <img
          onClick={() => handleSideBar()}
          className={
            "h-[14px] md:h-[28px] mx-4 my-[18px] cursor-pointer " +
            (!Mode && " bg-white rounded-full h-[32px] mx-4 my-5")
          }
          alt="hamburger"
          src={
            (Mode &&
              " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt6RelyZijG9C8X2-TiA7xRw36TesoQPO0A&usqp=CAU") ||
            (!Mode &&
              " https://cdn-icons-png.flaticon.com/512/3388/3388823.png")
          }
        />
        <img
          className={
            " h-[32px] w-[32px] md:h-[64px] md:w-[64px] mx-2 md:mx-4 my-2 rounded-full"
          }
          alt="youtube"
          src={
            "https://t4.ftcdn.net/jpg/01/83/63/39/240_F_183633963_bEMMXpniUA8dIUUYuqm1BU8PfNBkaJ21.jpg"
          }
        />
      </div>
      <div className="md:col-span-10 md:mx-52 my-4">
        <input
          type="text"
          placeholder="Search"
          className={
            "w-[12rem] p-1 md:w-[35.5rem] md:px-8  md:p-2 rounded-l-full border border-gray-400"
          }
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className={"md:p-2 md:px-4 p-1 rounded-r-full border border-gray-400"}
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
        {showSuggestions && (
          <div
            className={
              "absolute bg-white  rounded-lg  border border-gray-400 shadow-lg"
            }
          >
            {searchSuggestions && (
              <ul>
                {searchSuggestions.map((suggestion) => (
                  <li
                    className="py-2 px-8 hover:bg-gray-200 rounded-lg w-[35.5rem]"
                    onClick={() => {
                      handleSearch();
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="">
        <button
          className={
            "bg-black text-white sm:text-xs md:text-base md:p-2 md:px-4 p-2 rounded-2xl md:mr-10 mr-2 my-4 shadow-lg hover:bg-gray-900 border border-white md:w-[70%]"
          }
          onClick={() => {
            dispatch(toggleMode());
          }}
        >
          {!Mode ? "Light☀️" : "Dark🌙"}
        </button>
      </div>

      <div className="md:col-span-1">
        <img
          className="md:h-16 md:w-16 h-8 w-8 m-2 rounded-full"
          alt="profile"
          src={profileImg}
        />
      </div>
    </div>
  );
};

export default Head;
