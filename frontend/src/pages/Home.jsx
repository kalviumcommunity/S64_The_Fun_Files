function Home() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          background: "#222222",
          color: "#d7dadc",
          fontFamily: "Arial, sans-serif",
          padding: "5vw",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: "700",
            color: "#ff4500",
            textShadow: "1px 1px 3px rgba(255, 69, 0, 0.4)",
            letterSpacing: "1px",
            animation: "fadeIn 1.5s ease-in-out",
            marginBottom: "10px",
          }}
        >
          Welcome to FunFiles! 🎉
        </h1>
        <p
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
            maxWidth: "60%",
            fontWeight: "500",
            lineHeight: "1.6",
            opacity: "0.9",
            animation: "fadeIn 2s ease-in-out",
            padding: "0 5vw",
          }}
        >
          Share your <b>quirky skills</b>, <b>hilarious stories</b>, and <b>crazy moments</b>  
          with a community that loves humor as much as you do!
        </p>
        <button
          style={{
            marginTop: "25px",
            padding: "15px 40px",
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#ff4500",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
            boxShadow: "0px 5px 12px rgba(255, 69, 0, 0.3)",
            animation: "bounceIn 2.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.backgroundColor = "#d93a00";
            e.target.style.boxShadow = "0px 7px 17px rgba(255, 69, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#ff4500";
            e.target.style.boxShadow = "0px 5px 12px rgba(255, 69, 0, 0.3)";
          }}
        >
          Start the Fun! 🚀
        </button>
  
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
  
            @keyframes bounceIn {
              0% { transform: scale(0.9); opacity: 0; }
              50% { transform: scale(1.05); opacity: 0.7; }
              100% { transform: scale(1); opacity: 1; }
            }
  
            @media (max-width: 600px) {
              h1 {
                font-size: 2rem;
              }
              p {
                font-size: 1rem;
                max-width: 90%;
              }
              button {
                padding: 12px 24px;
              }
            }
  
            @media (min-width: 1200px) {
              p {
                max-width: 50%;
              }
            }
          `}
        </style>
      </div>
    );
  }

export default Home;