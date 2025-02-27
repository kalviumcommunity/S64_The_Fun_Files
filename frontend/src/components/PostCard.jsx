function PostCard({ title, category, votes, content }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #292929, #3a3a3a)",
      color: "#fff",
      padding: "20px",
      borderRadius: "15px",
      width: "100%",  /* ✅ Responsive width */
      maxWidth: "350px", /* ✅ Ensures consistency */
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "center",
      fontSize: "1.2rem",
      boxShadow: "0 8px 20px rgba(255, 102, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      border: "1px solid rgba(255, 102, 0, 0.4)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 102, 0, 0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 102, 0, 0.3)";
    }}>
      <h2 style={{
        color: "#ff6600",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
      }}>
        {title}
      </h2>

      <h4 style={{
        opacity: 0.9,
        fontSize: "1rem",
        marginBottom: "10px",
        fontWeight: "600",
      }}>
        {category} | {votes} Votes
      </h4>

      <p style={{
        lineHeight: 1.6,
        color: "#ccc",
        flexGrow: 1,
        marginBottom: "15px",
      }}>
        {content}
      </p>

      <button 
        style={{
          background: "transparent",
          color: "#ff6600",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          fontWeight: "bold",
          padding: "8px",
          transition: "0.3s",
          textDecoration: "underline",
        }}
      >
        View Comments ▼
      </button>
    </div>
  );
}

export default PostCard;
