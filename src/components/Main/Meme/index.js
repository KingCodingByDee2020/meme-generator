import api from "api";
import { Loader } from "components/base";
import { getRandomIntInclusive } from "lib";
import { useQuery } from "react-query";
import Figure from "./Figure";

function renderRandomImage({ data: { memes } }) {
  return <Figure src={memes[getRandomIntInclusive(0, memes.length - 1)].url} />;
}

const Meme = () => {
  async function fetchMemeImages() {
    const memes = await api.index();
    return memes;
  }

  // ⚠️ Cannot destructure data as it starts as undefined while the fetch is occurring
  const { isSuccess, data } = useQuery("memes", fetchMemeImages);

  return isSuccess ? renderRandomImage(data) : <Loader />;
};

export default Meme;
