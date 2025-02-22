import Step1DeclareEffect from "./Step1DeclareEffect";
import Step2Dependencies, { Step2DependenciesGood } from "./Step2Dependencies";
import Step3AddClean from "./Step3AddClean";

export default function EffectManualSection() {
  return (
    <section>
      <h2>Effect</h2>
      <div className="block">
        <h3>Шаг 1 объявление эффекта</h3>
        <p>
          Проблема в том что кнопка запуска и компонент видео в разных
          компонентах и чтобы управлять требуется ссылка на объект и запуск
          функции. Но проблема в том что сначала создается ссылка, а потом
          происходит присвоение. Тем самым во время рендера нельзя вызвать метод
          у объекта дом потому что он не присвоен, а эффект позволяет запустить
          данный код после рендера.
        </p>
        <Step1DeclareEffect />
      </div>

      <div className="block">
        <h3>Шаг 2 установка зависимости</h3>
        <p>Смотри консоль</p>
        <div className="flex">
          <div className="">
            <h4>Пример 1</h4>
            <p>
              При заполнении поле ввода компонент перерисовывается и выполняет
              эффект каждый раз.
            </p>
            <Step2Dependencies />
          </div>
          <div className="">
            <h4>Пример 2</h4>
            <p>
              Добавлена зависимость в эффект он реагирует на изменение
              переменной если в прошлый рендер она имела другое значение то
              эффект выполняется
            </p>
            <Step2DependenciesGood />
          </div>
        </div>
      </div>

      <div className="block">
        <h3>Добавление очистки</h3>
        <p>При разработке эффекты запускаются 2 раза для поиска ошибок, на проде такого не будет.</p>
        <p>в данном примере реализовано подключение к чату и чтобы эффект выполнялся 1 раз после монтирования, требуется указать пустую зависимость [ ]. а так же указать дествия при размонтировании компонента.</p>
        <Step3AddClean/>
      </div>
    </section>
  );
}
