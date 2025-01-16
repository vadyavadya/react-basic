import Header from "./components/Header/Header";
import TeacherSection from "./components/TeacherSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabSection from "./components/TabSection";
import { useState } from "react";
import FeedbackSection from "./components/FeуdbackSection";
import Test from "./components/Test";
import EffectSection from "./components/EffectSection";
import EffectCleanMemory from "./components/EffectCleanMemory";
import ContextSection from "./components/ContextBase/ContextSection";
import ContextSection2 from "./components/Context/ContextSection";
import ReducerSection from "./components/Reducer/ReducerSection";
import ContextReducer from "./components/ContextReducer/ContextReducer";
import RefSection from "./components/Ref/RefSection";
import EffectManualSection from "./components/Effect/EffectManualSection";
import EffectAndCustomHock from "./components/EffectAndCustomHock/EffectAndCustomHock";

const routes = [
  {
    value: "Home",
    title: "Домашняя страница",
    element: (
      <>
        <TeacherSection />
        <DifferencesSection />
      </>
    ),
  },
  {
    value: "feedback",
    title: "Обратная связь",
    element: <FeedbackSection />,
  },
  {
    value: "test",
    title: "Тест",
    element: <Test />,
  },
  {
    value: "effect",
    title: "Эффект",
    element: <EffectSection />,
  },
  {
    value: "effectmem",
    title: "Очистка памяти при использовании эффекта",
    element: <EffectCleanMemory />,
  },
  {
    value: "context",
    title: "Контекст",
    element: <ContextSection />,
  },
  {
    value: "context2",
    title: "Контекст 2",
    element: <ContextSection2 />,
  },
  {
    value: "reducer",
    title: "Редьюсер",
    element: <ReducerSection />,
  },
  {
    value: "context-reducer",
    title: "Контекст Редьюсер",
    element: <ContextReducer />,
  },
  {
    value: "ref",
    title: "Ref",
    element: <RefSection />,
  },
  {
    value: "effect-manual",
    title: "Effect Manual",
    element: <EffectManualSection/>,
  },
  {
    value: "effect-custom-hock",
    title: "Effect С хуком",
    element: <EffectAndCustomHock/>,
  },
];

function App() {
  const [page, setPage] = useState("effect-custom-hock");

  return (
    <>
      <Header />
      <main>
        <IntroSection style={{ marginBottom: "1rem" }} />
        <TabSection
          page={page}
          onChange={(current) => setPage(current)}
          pages={routes}
        />

        {routes.find((route) => route.value === page).element}

        {/*  {page === "home" && (
          <>
            <TeacherSection />
            <DifferencesSection />
          </>
        )} */}

        {/* {page === "feedback" && <FeedbackSection />}
        {page === "test" && <Test />}
        {page === "effect" && <EffectSection/>}
        {page === 'effectmem' && <EffectCleanMemory/>}
        {page === 'context' && <ContextSection/>}
        {page === 'context2' && <ContextSection2/>}
        {page === 'reducer' && <ReducerSection/>}
        {page === 'context-reducer' && <ContextReducer/>}
        {page === 'ref' && <RefSection/>} */}
      </main>
    </>
  );
}

export default App;
