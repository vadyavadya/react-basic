function IntroSection({...prop}) {
  return (
    <section {...prop}>
      <h1 className="centered">React</h1>
      <h3 className="centered" style={{ color: "#666" }}>
        Тренировка и закрепление библиотеки
      </h3>
    </section>
  );
}

export default IntroSection;
