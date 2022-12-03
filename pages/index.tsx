import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { SiTwitter } from "react-icons/si";
import { useAuth } from "../contexts/AuthContext";
import { GoogleLogin, TwitterLogin, logout } from "../lib/Auth";

export default function Home() {
  const user = useAuth();
  return (
    <>
      <h1>Firebase Auth Template</h1>
      <p>
        This application uses Firebase Authentication and Firestore. If logged
        in by each provider, make user document in Firestore.
      </p>
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          padding: "32px 0",
        }}
      >
        <button onClick={GoogleLogin}>
          <FcGoogle size={32} />
        </button>
        <button onClick={TwitterLogin}>
          <SiTwitter size={32} color="#00acee" />
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={logout}>Sign Out</button>
      </div>
      <h2>Use Data</h2>
      {!user ? (
        <>Not logged in</>
      ) : (
        <table>
          <tr>
            <td>name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>photo</td>
            <td>
              <Image
                src={user.photoURL}
                alt="user photo"
                width={32}
                height={32}
              />
            </td>
          </tr>
        </table>
      )}
    </>
  );
}
