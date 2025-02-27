import PostCard from "../components/PostCard";

function PostCardPage() {
  const posts = [
    {
      title: "I Can Juggle With My Feet! 🦶😂",
      category: "Useless Skill",
      votes: 42,
      content:
        "I practiced juggling for years but one day I tried it with my feet, and it kinda worked. Now, it's my go-to party trick!",
    },
    {
      title: "My Funniest Zoom Fail 🤦‍♂️",
      category: "Embarrassing Story",
      votes: 75,
      content:
        "I thought my mic was muted and started singing loudly. My entire office enjoyed my concert! It was embarrassing but funny!",
    },
    {
      title: "Accidental Mic On! 🎤😳",
      category: "Embarrassing Story",
      votes: 65,
      content:
        "I was venting about my boss... on an open call. The silence was LOUD! I wanted to disappear at that moment!",
    },
  ];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(to right, #1e1e1e, #2a2a2a)",
      color: "#f1f1f1",
      fontFamily: "'Poppins', sans-serif",
      padding: "5vw",
      textAlign: "center",
    }}>
      <h1 style={{
        color: "#ff6600",
        marginBottom: "30px",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "bold",
        textShadow: "2px 2px 10px rgba(255, 102, 0, 0.5)",
      }}>
        Latest Fun Stories 🎭
      </h1>

      {/* Horizontal Scroll Wrapper */}
      <div style={{
        display: "flex",
        overflowX: "auto",  /* ✅ Enables horizontal scrolling if needed */
        scrollbarWidth: "none", /* Hides default scrollbar */
        gap: "40px", /* ✅ Adds space between cards */
        padding: "10px",
        width: "90%",
        maxWidth: "1200px",
        justifyContent: "center", /* ✅ Centers the cards */
      }}>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default PostCardPage;
