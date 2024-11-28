import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ReviewComponent from "@/components/Review";


export default function ReviewPage(){

    return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <ReviewComponent/>
      </main>
      <Footer />
    </>
  );
}

