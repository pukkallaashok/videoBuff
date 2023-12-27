import { useEffect } from "react";
import { Google_API_Key } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getPlayingVideo } from "../utils/PlayingVideoSlice";

const useWatchByID = (SearchParams) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        SearchParams +
        "&key=" +
        Google_API_Key
    );

    const json = await data.json();

    dispatch(getPlayingVideo(json.items));
  };
};

export default useWatchByID;
