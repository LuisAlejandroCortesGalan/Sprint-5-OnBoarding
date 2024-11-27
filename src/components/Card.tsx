interface Props {
  h2: string;
  color: string;
  img: string;
  text: string;
  key: number;
  handleNext: () => void;
  handlePrevius: () => void;

}

const Card = ({ h2, img, key, text, color, handleNext, handlePrevius }: Props) => {
  return (
    <>
      <div
    
        className="card shadow-lg my-4 mx-auto"
        key= {key}
        style={{
          maxWidth: "300px", 
          width: "100%",
          background: color 
        }}
      >
        <img
          src={img}
          className="card-img-top img-fluid"
          style={{ maxHeight: "200px", objectFit: "cover" }}
          alt="Card Image"
        />
        <div>
          <h2>{h2}</h2>
          <p>
            {text}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handleNext}>
            ⬅️
          </button>
          <button className="btn btn-primary" onClick={handlePrevius}>
            ➡️
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
