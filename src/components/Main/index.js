import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./Form";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => {
  function handleSubmit(event) {
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
  }

  return (
    <main>
      <Form submitHandler={handleSubmit} />
      <QueryClientProvider client={qc}>
        {/* All components inside the Provider will have access to the Client */}
        <Meme />
      </QueryClientProvider>
    </main>
  );
};

export default Main;
