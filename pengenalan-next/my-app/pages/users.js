import React from 'react';

const UserList = ({ users }) => {
    return(
        <div>
            <h1>Daftar Pengguna</h1>
            <br />
            {users.map((user) => (
                <div key={user.id}>
                    <h2>Nama: {user.name}</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const users = await res.json(); // Konversi data API ke JSON

    return {
        props: { users }, // Kirim data ke komponen sebagai props
    };
}

export default UserList;