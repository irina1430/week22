function Card({ hero }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{hero.name}</h3>
        <p>
          <strong>Вселенная:</strong> {hero.universe}
        </p>
        <p>
          <strong>Альтер эго:</strong> {hero.alterego}
        </p>
        <p>
          <strong>Род деятельности:</strong> {hero.occupation}
        </p>
        <p>
          <strong>Друзья:</strong> {hero.friends}
        </p>
        <p>
          <strong>Суперсилы:</strong> {hero.superpowers}
        </p>
        <img src={hero.url} alt={hero.name} />
      </div>
    </div>
  );
}
export default Card;
