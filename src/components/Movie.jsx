/* eslint-disable react/prop-types */
export default function Movie({ movie }) {
  const excerpt = (str) => {
    if (str.length > 20) {
      return str.substring(0, 20) + '...';
    }

    return str;
  };

  return (
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt="Poster" />
      <div className="card-body bg-warning">
        <p className="card-title text-white fw-bold" title={movie.Title}>
          {excerpt(movie.Title)}
        </p>
      </div>
    </div>
  );
}
