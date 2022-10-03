import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>muhammad oka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex h-[calc(100vh-200px)] items-center">
            <div>
              <h1 className="text-8xl font-semibold pb-5"><span className="text-cyan-500">/</span>about</h1>
              <p className="text-xl">
                Hello! My name is Muhammad Oka, known as Oka. I started programming in 3rd grade after joining the robotics team in my elementary school.
                Currently an undergraduate computer science at the University of Indonesia. I am interested in Cyber Security and Web Development.
                <br></br><br></br>
                Outside from the computer world, I have a passion for music, photography, and videography.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}