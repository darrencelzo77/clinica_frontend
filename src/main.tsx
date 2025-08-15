import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import "./styles/global.css";
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor, store } from './redux/store.ts'


// createRoot(document.getElementById('root')!).render(
//   // <StrictMode> this is the reason why double entry ?????? 
//     <Provider store={store}>
//       <PersistGate persistor={persistor} loading={null}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   // </StrictMode>,
// )

