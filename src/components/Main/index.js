// Context is a way for a parent component to provide state to any/all descendants
// This prevents prop-drilling
import { TextContext } from "context";
// `useState` is a hook that keeps track of and updates component state
import { useState } from "react";
// `react-query` is to manage SERVER-SIDE STATE
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => {
  // Initialize state with `""`
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTopText(() => event.target.elements[0].value);
    setBottomText(() => event.target.elements[1].value);
  }

  return (
    <main className="flex flex-col pt-8 items-center justify-center">
      <Form submitHandler={handleSubmit} />
      <QueryClientProvider client={qc}>
        <TextContext.Provider value={{ topText, bottomText }}>
          {/* `Meme` and all of its descendants are provided access to `TextContext` */}
          <Meme />
        </TextContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
};

export default Main;
