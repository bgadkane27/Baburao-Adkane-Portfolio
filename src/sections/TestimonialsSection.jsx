export default function TestimonialsSection({onBack}) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl mb-6">My Work</h2>
      <p className="text-lg">This is where your project content goes!</p>
      <button
        onClick={onBack}
        className="mt-8 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded"
      >
        Back to Home
      </button>
    </div>
    );
  }
  