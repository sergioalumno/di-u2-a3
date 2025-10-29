function Drink({ name }) {

    if (name=='té') {
      return (<section>
        <h1>{name}</h1>
        <dt>Parte de la planta</dt>
        <dd>hoja</dd>
        <dt>contenido de cafeina</dt>
        <dd>10-70mg taza</dd>
        <dt>Antigüedad</dt>
        <dd>4000 años</dd>
      </section>)
    } else {
      return (<section>
        <h1>{name}</h1>
        <dt>Parte de la planta</dt>
        <dd>grano</dd>
        <dt>contenido de cafeina</dt>
        <dd>80-185mg taza</dd>
        <dt>Antigüedad</dt>
        <dd>1000 años</dd>
      </section>)
    }
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  