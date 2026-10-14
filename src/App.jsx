
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Dumbbell,
  ArrowUpRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

const programs = [
  {
    number: "01",
    name: "Strength Training",
    description: "Build strength, improve technique and push your limits.",
  },
  {
    number: "02",
    name: "Muscle Building",
    description: "Follow a consistent training plan to build muscle.",
  },
  {
    number: "03",
    name: "Cardio Fitness",
    description: "Improve stamina, endurance and cardiovascular fitness.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "999",
    description: "A simple start to your fitness journey.",
    features: ["Gym access", "Equipment access", "Locker access"],
  },
  {
    name: "Pro",
    price: "1,799",
    description: "For people ready to take their training further.",
    features: [
      "All Basic benefits",
      "Workout guidance",
      "Progress tracking",
    ],
  },
  {
    name: "Elite",
    price: "2,999",
    description: "A more personalized fitness experience.",
    features: [
      "All Pro benefits",
      "Personal training",
      "Custom workout plan",
    ],
  },
];

// Sample trainer profiles: 1 male and 2 female
const trainers = [
  {
    name: "Rahul Verma",
    role: "Strength & Muscle Building",
    experience: "6+ Years Experience",
    gender: "Male Trainer",
    description:
      "Learn strength training techniques and work towards your muscle-building goals with a consistent routine.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Fitness & Weight Management",
    experience: "4+ Years Experience",
    gender: "Female Trainer",
    description:
      "Focus on healthy habits, balanced workouts and building confidence throughout your fitness journey.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ananya Singh",
    role: "Cardio & Functional Training",
    experience: "3+ Years Experience",
    gender: "Female Trainer",
    description:
      "Improve stamina, mobility and overall fitness with structured cardio and functional exercises.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link className="logo" to="/" onClick={closeMenu}>
        <Dumbbell size={25} /> FIT<span>ZONE</span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/programs" onClick={closeMenu}>
          Programs
        </NavLink>

        <NavLink to="/trainers" onClick={closeMenu}>
          Trainers
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/membership" onClick={closeMenu}>
          Membership
        </NavLink>
      </div>

      <Link className="nav-button" to="/join" onClick={closeMenu}>
        Join Now <ArrowUpRight size={17} />
      </Link>
    </nav>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tag">YOUR FITNESS. YOUR FUTURE.</p>

          <h1>
            BUILD YOUR
            <br />
            <span>STRONGER</span>
            <br />
            SELF.
          </h1>

          <p className="description">
            No shortcuts. No excuses. Just you, your goals,
            and the discipline to become your strongest self.
          </p>

          <div className="hero-actions">
            <Link className="main-button" to="/membership">
              Start Your Journey <ArrowUpRight size={19} />
            </Link>

            <Link className="outline-button" to="/programs">
              Explore Programs
            </Link>
          </div>

          <div className="stats">
            <div>
              <strong>500+</strong>
              <small>Fitness Members</small>
            </div>

            <div>
              <strong>15+</strong>
              <small>Expert Trainers</small>
            </div>

            <div>
              <strong>03</strong>
              <small>Training Programs</small>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-badge">
            <Dumbbell size={22} />
            <div>
              <strong>NO EXCUSES.</strong>
              <small>JUST RESULTS.</small>
            </div>
          </div>

          <div className="image-caption">
            DISCIPLINE OVER MOTIVATION.
          </div>
        </div>
      </section>

      <section className="section home-intro">
        <p className="tag">WELCOME TO FITZONE</p>

        <h2>
          YOUR GOALS. OUR <span>MISSION.</span>
        </h2>

        <p className="section-description">
          More than a gym, FITZONE is a place to build strength,
          develop discipline and create a healthier lifestyle.
          Every rep takes you one step closer to your goals.
        </p>

        <Link className="main-button" to="/about">
          Discover FITZONE <ArrowUpRight size={18} />
        </Link>
      </section>

      <section className="section programs">
        <p className="tag">FIND YOUR FOCUS</p>

        <h2>
          TRAIN WITH <span>PURPOSE.</span>
        </h2>

        <div className="cards">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <span className="program-number">{program.number}</span>

              <Dumbbell className="program-icon" size={28} />

              <h3>{program.name}</h3>
              <p>{program.description}</p>

              <Link to="/programs" className="program-link">
                Explore Program <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>

        <Link
          className="main-button section-action"
          to="/programs"
        >
          Explore All Programs <ArrowUpRight size={18} />
        </Link>
      </section>

      <section className="home-cta">
        <p className="tag">YOUR NEXT CHAPTER STARTS HERE</p>

        <h2>
          READY TO BECOME <span>STRONGER?</span>
        </h2>

        <p>
          Your goals won't achieve themselves. Start building
          your best self today.
        </p>

        <Link className="main-button" to="/join">
          Join FITZONE <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

function Programs() {
  return (
    <section className="page-section">
      <p className="tag">FIND YOUR TRAINING STYLE</p>

      <h1 className="page-title">
        OUR <span>PROGRAMS.</span>
      </h1>

      <p className="section-description">
        Choose a fitness focus and start building a consistent routine.
      </p>

      <div className="cards">
        {programs.map((program) => (
          <article className="program-card" key={program.number}>
            <Dumbbell className="program-icon" size={30} />

            <p className="tag">{program.number} / TRAINING</p>
            <h3>{program.name}</h3>
            <p>{program.description}</p>

            <Link to="/join" className="program-link">
              Get Started <ArrowUpRight size={17} />
            </Link>
          </article>
        ))}
      </div>

      <div className="page-cta">
        <h2>
          READY TO <span>GET STARTED?</span>
        </h2>

        <Link className="main-button" to="/join">
          Join FITZONE <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}

// Trainers Page
function Trainers() {
  return (
    <section className="page-section trainers-page">
      <div className="trainers-hero">
        <p className="tag">MEET OUR TEAM</p>

        <h1 className="page-title">
          TRAIN WITH THE <span>BEST.</span>
        </h1>

        <p className="section-description">
          Meet our fitness professionals and find the right guidance
          for your fitness journey.
        </p>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer) => (
          <article className="trainer-card" key={trainer.name}>
            <div className="trainer-image">
              <img
                src={trainer.image}
                alt={trainer.name}
                loading="lazy"
              />
            </div>

            <div className="trainer-info">
              <span className="trainer-gender">
                {trainer.gender}
              </span>

              <span className="trainer-experience">
                {trainer.experience}
              </span>

              <h2>{trainer.name}</h2>
              <h3>{trainer.role}</h3>
              <p>{trainer.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="page-cta trainers-cta">
        <h2>
          READY TO <span>START TRAINING?</span>
        </h2>

        <p className="section-description">
          Choose your membership and begin your fitness journey.
        </p>

        <Link className="main-button" to="/membership">
          View Membership Plans <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section about-page">
      <div className="about-visual">
        <div className="about-stamp">
          NO
          <br />
          EXCUSES.
        </div>
      </div>

      <div className="about-content">
        <p className="tag">MORE THAN A GYM</p>

        <h1 className="page-title">
          YOUR GOALS.
          <br />
          OUR <span>MISSION.</span>
        </h1>

        <p>
          FITZONE is a fitness concept built around consistency,
          confidence and personal progress. Whether you are
          starting out or improving your existing routine,
          make every session count.
        </p>

        <ul className="feature-list">
          <li>
            <CheckCircle size={18} />
            Goal-focused training programs
          </li>
          <li>
            <CheckCircle size={18} />
            A supportive fitness community
          </li>
          <li>
            <CheckCircle size={18} />
            Progress-focused workouts
          </li>
          <li>
            <CheckCircle size={18} />
            Multiple membership options
          </li>
        </ul>

        <Link className="main-button" to="/programs">
          Explore Programs <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section className="page-section">
      <p className="tag">MEMBERSHIP PLANS</p>

      <h1 className="page-title">
        INVEST IN <span>YOURSELF.</span>
      </h1>

      <p className="section-description">
        Choose a plan that suits your goals. Prices are sample
        college-project rates per month.
      </p>

      <div className="cards">
        {plans.map((plan) => (
          <article
            className={`plan-card ${plan.name === "Pro" ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.name === "Pro" && (
              <span className="popular-label">MOST POPULAR</span>
            )}

            <h3>{plan.name}</h3>
            <p>{plan.description}</p>

            <p className="price">
              ₹{plan.price} <small>/ month</small>
            </p>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle size={17} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              className={
                plan.name === "Pro"
                  ? "main-button plan-button"
                  : "outline-button plan-button"
              }
              to={`/join?plan=${encodeURIComponent(plan.name)}`}
            >
              Choose Plan <ArrowUpRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Join() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedPlan = searchParams.get("plan");

  const initialPlan = plans.some((item) => item.name === requestedPlan)
    ? requestedPlan
    : "Pro";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("Muscle Building");
  const [plan, setPlan] = useState(initialPlan);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length < 2) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const digitsOnly = cleanPhone.replace(/\D/g, "");

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      alert("Please enter a valid phone number.");
      return;
    }

    setName(cleanName);
    setEmail(cleanEmail);
    setPhone(cleanPhone);
    setSubmitted(true);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setGoal("Muscle Building");
    setPlan("Pro");
    setSubmitted(false);
  }

  return (
    <section className="page-section join-page">
      <div className="join-intro">
        <p className="tag">YOUR NEXT CHAPTER STARTS HERE</p>

        <h1 className="page-title">
          READY TO
          <br />
          <span>GET STRONGER?</span>
        </h1>

        <p className="section-description">
          Tell us about yourself and select your preferred membership.
        </p>
      </div>

      <form className="join-form" onSubmit={handleSubmit} noValidate>
        {submitted ? (
          <div className="success-message" role="status">
            <CheckCircle size={44} />

            <h2>Thank you, {name}!</h2>
            <p>Your demo registration is complete.</p>

            <p>
              Email: <strong>{email}</strong>
            </p>

            <p>
              Phone: <strong>{phone}</strong>
            </p>

            <p>
              Plan: <strong>{plan}</strong>
            </p>

            <p>
              Goal: <strong>{goal}</strong>
            </p>

            <p>
              Monthly fee:{" "}
              <strong>
                ₹{plans.find((item) => item.name === plan)?.price}
              </strong>
            </p>

            <p className="form-note">
              This is a demo registration. Your details have
              not been sent or saved to a server.
            </p>

            <button
              type="button"
              className="main-button"
              onClick={() => navigate("/")}
            >
              Back to Home <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className="outline-button"
              onClick={resetForm}
            >
              Register Another Member
            </button>
          </div>
        ) : (
          <>
            <h2>Join FITZONE</h2>

            <p className="form-description">
              Complete your details below.
            </p>

            <label htmlFor="member-name">Full Name</label>
            <input
              id="member-name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
              minLength={2}
              maxLength={60}
              autoComplete="name"
              required
            />

            <label htmlFor="member-email">Email Address</label>
            <input
              id="member-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={100}
              required
            />

            <label htmlFor="member-phone">Phone Number</label>
            <input
              id="member-phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter your phone number"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              required
            />

            <label htmlFor="member-goal">Fitness Goal</label>
            <select
              id="member-goal"
              name="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            >
              <option>Muscle Building</option>
              <option>Strength Training</option>
              <option>Cardio Fitness</option>
              <option>Weight Management</option>
              <option>General Fitness</option>
            </select>

            <label htmlFor="member-plan">Membership Plan</label>
            <select
              id="member-plan"
              name="plan"
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
            >
              {plans.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} — ₹{item.price}/month
                </option>
              ))}
            </select>

            <p className="form-description">
              Selected plan:{" "}
              <strong>
                {plan} — ₹
                {plans.find((item) => item.name === plan)?.price}/month
              </strong>
            </p>

            <button
              type="submit"
              className="main-button submit-button"
            >
              Submit Registration <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className="outline-button"
              onClick={resetForm}
            >
              Clear Form
            </button>

            <p className="form-note">
              Demo form only. Details are not sent to a server.
            </p>
          </>
        )}
      </form>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page-section not-found">
      <p className="tag">404 / PAGE NOT FOUND</p>

      <h1 className="page-title">
        LOST YOUR <span>WAY?</span>
      </h1>

      <Link to="/" className="main-button">
        Return Home
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <Link className="logo" to="/">
        <Dumbbell size={23} /> FIT<span>ZONE</span>
      </Link>

      <p>STRONGER EVERY DAY. © 2026 FITZONE.</p>

      <Link to="/join">JOIN FITZONE ↗</Link>
    </footer>
  );
}

function AppLayout() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
