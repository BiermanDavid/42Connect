interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <>
      <img 
        src="/wallpaper.svg" 
        alt="Wallpaper" 
        className="wallpaper-image"
      />
      <img 
        src="/background.svg" 
        alt="Background" 
        className="background-image"
      />
      
      <div className="button-wrapper login-button-wrapper" onClick={onLogin}>
        <img 
          src="/button.svg" 
          alt="Login Button" 
          className="button-image-display login-button-display"
        />
        <div className="hitbox login-hitbox" />
      </div>
    </>
  );
}

export default LoginPage;