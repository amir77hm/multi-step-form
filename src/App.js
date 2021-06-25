import Navbar from "./Navbar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Form from "./Form";
import PageContent from "./PageContext";
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from './context/LanguageContext'
import { FormProvider } from "./context/FormContext";
import './App.css'


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <FormProvider>
            <Form>
              <Step1 />
              <Step2 />
              <Step3 />
            </Form>
          </FormProvider>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
