import Profile from "./Profile";
function App() {
  return (
    <Profile
      name={"Vinay Kumar"}
      age={22}
      profileImage={"./ProfileImage.png"}
      location={"Gurugram"}
      followers={789}
      likes={393}
      photos={53}
    />
  );
}

export default App;
