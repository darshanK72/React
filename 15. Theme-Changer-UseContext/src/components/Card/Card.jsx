function Card() {
  return (
    <div className="card">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/236/598/385/tom-and-jerry-wallpaper-preview.jpg"
        className="card-img-top"
        alt="Tom & Jerry"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card