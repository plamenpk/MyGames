import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const LogIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <LoginForm />;
}

export default LogIn;