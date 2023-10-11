import { Link } from "react-router-dom";

const App = () => {

  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch("http://localhost:5555/users", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        alert("users added successfully");
        form.reset();
      }
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div>
      <h1>Simple CRUD</h1>
      <Link to="/users">Users</Link>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" placeholder="name" />
        <br />
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default App;