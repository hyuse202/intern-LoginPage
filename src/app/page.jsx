import Header from "./Header";
import LoginForm from "@/components/LoginForm";
export default function Home() {
  return (
    <div className="w-full h-full bg-slate-600 overflow-hidden">
      <Header/>
      <LoginForm/>
    </div>
  );
}
