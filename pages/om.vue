<template>
  <main>
    <h1>VÄLKOMMEN HIT!</h1>
    <p class="about">
      Jag har gått ifrån en magisterutbildning i Idrottsmedicin och arbete som
      tränare till att idag utbilda mig till programmerare. Helomvändning?
      Egentligen inte eftersom det är exakt samma sak som driver mig, nämligen
      att skapa, analysera och optimera och som utvecklare får jag göra detta
      till 100% vilket jag älskar! Min inriktning är frontendutveckling men
      intresset sträcker sig både mot UX/design och backendutveckling. Jag tar
      examen från IT-Högskolan, Göteborg, sommaren 2021 och söker då arbete som
      frontendutvecklare i Göteborg/omnejd.
    </p>
    <p class="sign">/Diana Nilsson</p>
  </main>
</template>

<style lang="scss" scoped>
.about {
  margin: 4rem 3rem;
}

.sign {
  color: $milk-red;
  font-family: 'Herr Von Muellerhoff', 'Italianno', serif;
  font-weight: 400;
  font-size: 2.8em;
  letter-spacing: 2px;
  margin-top: 2rem;
  text-align: center;
}

.about-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 4rem;

  .card {
    border-radius: 3px;
    box-shadow: 0px 2px 4px rgba(140, 140, 140, 0.5);
    width: 30%;
    height: 10rem;
    background-color: $white;
    margin-bottom: 1rem;
  }
}
</style>
