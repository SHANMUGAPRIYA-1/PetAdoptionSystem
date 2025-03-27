const pets = [
    { name: "Lily", price: 450, rating: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga28YpBbOzEHk-CnVLCXn-cB5jsHzIPkgoQ&s" },
    { name: "Charlie", price: 380, rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7rK7sRTzWVOO0RuQ_O_bELZVK7MkGcQTyA&s" },
    { name: "Molly", price: 520, rating: 3, image: "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_640.jpg" },
    { name: "Neo", price: 350, rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2z0ERwXQUqH29urPuzWueLXKhJAY6SMyAA&s" },
  ];
  
  const PetCard = ({ pet }) => {
    return (
      <div className="pet-card1">
        <img src={pet.image} alt={pet.name} />
        <div className="pet-card-content">
          <h3>{pet.name}</h3>
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <p className="pet-card-price">${pet.price}.00</p>
          <div className="pet-card-footer">
            <span className="rating">{"⭐".repeat(pet.rating)}</span>
            <span className="cart-icon">🛒</span>
          </div>
        </div>
      </div>
    );
  };
  
  const PetList = () => {
    return (
      <div>
        
        <div className="pets-container">
          {pets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>
      </div>
    );
  };
  
  export default PetList;
  