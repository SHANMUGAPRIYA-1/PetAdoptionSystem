import PetList from "./PetList";

const PetListing = () => {
  return (
    <>
      <div className="pet-listing">
       
        <p className="title">Kind of Pets</p>
        <div className="pet-categories">
          <div className="pet-card dog">
            <img
              src="https://images.icon-icons.com/2070/PNG/512/dog_icon_125586.png"
              alt="Dog"
            />
            <span>Dogs</span>
          </div>
          <div className="pet-card cat">
            <img
              src="https://static.vecteezy.com/system/resources/previews/055/142/738/non_2x/minimalistic-illustration-of-a-sitting-cat-silhouette-in-black-isolated-on-a-transparent-background-perfect-for-design-projects-and-animal-themes-png.png"
              alt="Cat"
            />
            <span>Cats</span>
          </div>
          <div className="pet-card bird">
            <img
              src="https://icon-library.com/images/birds-icon/birds-icon-10.jpg"
              alt="Bird"
            />
            <span>Birds</span>
          </div>
          <div className="pet-card exotic">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2219/2219667.png"
              alt="Exotic pets"
            />
            <span>Exotic pets</span>
          </div>
        </div>
      </div>
      <PetList />
    </>
  );
};

export default PetListing;
