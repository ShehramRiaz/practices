type GreetingProps = {
  name: string;
};

function Greeting(props: GreetingProps) {
  return <p>Hello, {props.name}!</p>;
}

// Destructuring Props
function SayHi({ name }: GreetingProps) {
  return <p>Hi, {name}!</p>;
}

type IntroductionProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

function Introduction({ name, age, isStudent }: IntroductionProps) {
  // isStudent = true; // Allowed but should be avoided
  return (
    <p>
      {name} is {age} years old and is{" "}
      {isStudent ? "a student" : "not a student"}.
    </p>
  );
}

function App() {
  return (
    <>
      <Greeting name="Shehram" />
      <Greeting name="Shahsawar" />
      <Greeting name="Adeel Alam" />
      <Greeting name="Abdul Basit" />

      <SayHi name="Roboticela" />

      <Introduction name="Shehram" age={19} isStudent={false} />
    </>
  );
}

export default App;
