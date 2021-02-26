import { QueryClient, QueryClientProvider } from "react-query";
import Meme from "./Meme";

const qc = new QueryClient();

const Main = () => (
  <main>
    <QueryClientProvider client={qc}>
      {/* All components inside the Provider will have access to the Client */}
      <Meme />
    </QueryClientProvider>
  </main>
);

export default Main;
