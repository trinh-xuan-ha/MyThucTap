export default function TestEnv() {
    return (
        <div>
            <p>Biến môi trường: {process.env.NEXT_PUBLIC_API_USERDATA}</p>
        </div>
    );
}