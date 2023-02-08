export default function SecondPage() {
  return (
    <>
      <h2>Second page</h2>

      <form>
        <span id="form2">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password" />
          <select>
            <option value=""></option>
            <option value="">Personal</option>
            <option value="">Pro</option>
            <option value="">Business</option>
          </select>
        </span>
      </form>
    </>
  );
}
