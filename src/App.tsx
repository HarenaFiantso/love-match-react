import SplitText from './components/SplitText';

export default function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <SplitText
        text="Hello les K1, how are you?"
        className="text-5xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </main>
  );
}
