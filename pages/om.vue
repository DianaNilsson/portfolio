<template>
  <main>
    <h1>VÄLKOMMEN HIT!</h1>
    <p class="about">
      Jag gillar att planera, detaljarbete och problemlösningen som jag behöver
      klara av längs vägen. Med programmeringen ser jag tusen möjligheter och
      jag kan knapptvänta på att få fortsätta utvecklas och få testa nya
      projekt.
      <br />
      Jag är en frontendutvecklare med intresse för helheten vilket bidrar till
      att jag hela tiden arbetar på att bredda mina kunskaper inom såväl
      <strong>frontend</strong> som <strong>backend</strong> och
      <strong>design/användarvänlighet</strong>.

      <br />
      <span class="sign">/Diana Nilsson</span>
    </p>

    <div class="about-cards">
      <!-- <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div> -->
    </div>
  </main>
</template>

<script>
// export default {}
</script>

<style lang="scss" scoped>
.about {
  margin: 4rem 3rem;
}

.sign {
  color: #b4545a;
  font-family: 'Herr Von Muellerhoff', 'Italianno', serif;
  font-weight: 400;
  font-size: 3em;
  letter-spacing: 2px;
  margin-left: 10rem;
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
