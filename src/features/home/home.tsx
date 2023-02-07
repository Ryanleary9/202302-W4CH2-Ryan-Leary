export default function HomePage() {
  return (
    <>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="date" />
        <label className="genbut">
          <p>
            <input type="radio" name="radiobut" />
            Male
          </p>
          <p>
            <input type="radio" name="radiobut" />
            Female
          </p>
          <p>
            <input type="radio" name="radiobut" />
            Oso Negro
          </p>
        </label>

        <input type="emai" placeholder="Correo Electronico" />
        <p>
          <input type="checkbox" />
          Desea recibir información de nuestra newsletter?
        </p>
        <span>
          <input type="submit" value={"NEXT"} />
        </span>
      </form>
    </>
  );
}
