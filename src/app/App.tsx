import { Suspense, useEffect } from "react";


import { languageCurrencyList, type SupportedLngsType } from "@/shared/config";
import i18n from "@/shared/config/i18n/i18n";
import { useAppDispatch } from "@/shared/lib";

import { AppRouter } from "./providers";

function App() {
  const dispatch = useAppDispatch();


  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;