import About from "./about"
import { Contact } from "./contact"
import Courses from "./courses"
import Hero from "./hero"
import { Result } from "./result"

const page = () => {
    return (
        <main >
            <section>
                {/* hero */}
            <Hero/>
            </section>

            <section>
                {/* courses */}
                <Courses />
            </section>

            <section>
                {/* about */}
                <About />
            </section>

            <section>
                {/* result */}
                <Result />
            </section>

            <section>
                {/* contact */}
<Contact/>
            </section>



        </main>
    )
}

export default page