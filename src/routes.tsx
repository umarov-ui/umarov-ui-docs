import Home from "./pages/Home/Home";
import Started from "./pages/Started/Started";

export const routes = [
    { path: `/`, element: <Home /> },
    { path: `/getting-started`, element: <Started /> }
]