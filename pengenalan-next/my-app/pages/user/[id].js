import { useRouter } from 'next/router';

export async function getStaticPaths() {
    // Ambil daftar semua user untuk membuat path dinamis
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    // Buat path dinamis berdasarkan ID
    const paths = users.map((user) => ({
        params: { id: user.id.toString() }, // ID harus berupa string
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Ambil detail user berdasarkan ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return { props: { user } };
}

const UserDetail = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default UserDetail;
