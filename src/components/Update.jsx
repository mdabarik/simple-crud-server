import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email}

        fetch(`http://localhost:5555/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                console.log('updated succesfully');
            }
        })
    }

    return (
        <div>
            <h3>Update information of: {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input defaultValue={loadedUser?.name} type="text" name="name" id="name" />
                <br />
                <input defaultValue={loadedUser?.email} type="email" name="email" id="email" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;