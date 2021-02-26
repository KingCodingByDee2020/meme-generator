import { QueryClient, QueryClientProvider } from "react-query";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => (
  <main>
    <QueryClientProvider client={qc}>
      <Meme />
    </QueryClientProvider>
  </main>
);

export default Main;
