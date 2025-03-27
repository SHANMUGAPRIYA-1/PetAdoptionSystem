import React, { useState } from "react";

const Rehome = () => {
  const [formData, setFormData] = useState({
    petName: "",
    age: "",
    gender: "",
    breed: "",
    species: "",
    character: "",
    color: "",
    size: "",
    vaccination: "",
    address: "",
    description: "",
    price: "", // Added price field
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  return (
    <div className="rehome-container">
      {/* Left side with background image */}
      <div className="left-section"></div>

      {/* Right side with form */}
      <div className="right-section">
        <h2>Your Pet Information</h2>

        <div className="pet-form">
          {[ 
            { icon: "fa-paw", name: "petName", placeholder: "Your pet name" },
            { icon: "fa-calendar", name: "age", placeholder: "Age", type: "number" },
            { icon: "fa-venus-mars", name: "gender", type: "select", options: ["Male", "Female"] },
            { icon: "fa-dog", name: "breed", placeholder: "Breed" },
            {
              icon: "fa-paw",
              name: "species",
              type: "select",
              options: ["Dogs", "Cats", "Birds", "Exotic Pets"],
            },
            { icon: "fa-smile", name: "character", placeholder: "Character" },
            { icon: "fa-palette", name: "color", placeholder: "Color" },
            { icon: "fa-ruler", name: "size", placeholder: "Size" },
            { icon: "fa-syringe", name: "vaccination", placeholder: "Vaccination Details" },
            { icon: "fa-map-marker-alt", name: "address", placeholder: "Address" },
          ].map((field, index) => (
            <div className="field-container" key={index}>
              <i className={`fas ${field.icon}`}></i>
              {field.type === "select" ? (
                <select name={field.name} onChange={handleChange}>
                  <option value="">{field.placeholder || "Select"}</option>
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input type={field.type || "text"} name={field.name} placeholder={field.placeholder} onChange={handleChange} />
              )}
            </div>
          ))}

          <div className="field-container textarea-container">
            <i className="fas fa-file-alt"></i>
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
          </div>

          {/* Price Field */}
          <div className="field-container">
            <i className="fas fa-dollar-sign"></i>
            <input type="number" name="price" placeholder="Enter Price" onChange={handleChange} />
          </div>
        </div>

        <div className="image-upload">
          <label>
            <i className="fas fa-upload"></i> Upload Images
          </label>
          <input type="file" multiple onChange={handleImageUpload} />
          <div className="preview">
            {formData.images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="Pet" />
            ))}
          </div>
        </div>

        <button className="add-btn">
          <i className="fas fa-plus-circle"></i> ADD
        </button>
      </div>
    </div>
  );
};

export default Rehome;
