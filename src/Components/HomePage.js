import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { User } from "./User"

export const HomePage = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    async function getData() {
        try {
            const data = await fetch("https://631d8e83cc652771a4876ead.mockapi.io/users").then((res) => res.json());
            // console.log(data);
            setUsers(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="home_page">
            <section className="header">
                <Button className="createUser btn m-1" variant="success" onClick={() => navigate("/create-user")}>Create new user</Button>
            </section>
            <div className="user_div">
                {users?.map((user, index) => {
                    return <User user={user} users={users} setUsers={setUsers} key={user.id} />
                })}
            </div>
        </div>
    )
}
