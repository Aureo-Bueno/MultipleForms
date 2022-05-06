import { FormProvider } from "./context/FormContext";
import { Router } from "./Router";


export const App = () => {
    return (
        <FormProvider>
            <Router />
        </FormProvider>
    );
}