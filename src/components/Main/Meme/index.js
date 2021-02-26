import api from "api";
import { getRandomIntInclusive } from "lib";
import { useQuery } from "react-query";

function renderRandomImage({ data: { memes } }) {
  return (
    <img
      src={memes[getRandomIntInclusive(0, memes.length - 1)].url}
      alt="Random meme"
    />
  );
}

const Meme = () => {
  async function fetchMemeImages() {
    const memes = await api.index();
    return memes;
  }

  // ⚠️ Cannot destructure data as it starts as undefined while the fetch is occurring
  // TODO: Use
  const { isSuccess, data } = useQuery("memes", fetchMemeImages);

  return isSuccess ? renderRandomImage(data) : <p>Loading...</p>;
};

export default Meme;
