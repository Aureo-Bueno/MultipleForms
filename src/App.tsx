import { FormProvider } from "./context/form";
import { Router } from "./routes/provider";

export function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}
