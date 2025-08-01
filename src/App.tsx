import { LoveForm } from './components';

export default function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <img src="/bg.png" className="w-full blur-xs absolute overflow-hidden z-[-1]" alt="BG" />
      <LoveForm />
    </main>
  );
}
