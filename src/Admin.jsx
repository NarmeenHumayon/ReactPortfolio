import { useEffect, useRef, useState } from "react";
import "./Admin.css";
import NavBar from "./components/NavBar/NavBar";
const Admin = () => {
  const [categories, setCategories] = useState([]);
  const cat_img_ref = useRef();
  const item_img_ref = useRef();
  const [formData, setFormData] = useState({
    cat_name: "",
    cat_img: null,
  });
  const [itemFormData, setItemFormData] = useState({
    item_name: "",
    item_desc: "",
    item_price: "",
    item_cat: "",
    rating: null,
    type: "",
    item_image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cat_img") {
      setFormData((prev) => ({ ...prev, cat_img: files[0] })); // For file input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value })); // For text input
    }
  };
  const handleItemChange = (e) => {
    const { name, value, files } = e.target;
    console.log(e.target);
    if (value == "null") {
      return;
    }
    if (name === "item_image") {
      setItemFormData((prev) => ({ ...prev, item_image: files[0] })); // For file input
    } else {
      setItemFormData((prev) => ({ ...prev, [name]: value })); // For text input
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <NavBar />
      <div className="admin-container">
        <div className="left">
          <div className="head">Add category</div>
          <form
            className="category-form"
            onSubmit={async (e) => {
              e.preventDefault();

              const data = new FormData();
              data.append("cat_name", formData.cat_name);
              data.append("cat_img", formData.cat_img);

              try {
                const response = await fetch("http://localhost:5000/category", {
                  method: "POST",
                  body: data,
                });
                if (response.ok) {
                  const result = await response.json();
                  console.log("Success:", result);
                  location.reload();
                } else {
                  console.error("Upload failed:", response.statusText);
                }
              } catch (error) {
                console.error("Error:", error);
              }
            }}
          >
            <div
              ref={cat_img_ref}
              style={{
                cursor: "pointer",
                borderRadius: "5px",
                width: "200px",
                height: "200px",
                backgroundImage:
                  "url('https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                document.getElementById("imginp").click();
              }}
            />
            <input
              type="file"
              id="imginp"
              name="cat_img"
              accept="image/*"
              hidden
              onChange={(event) => {
                const file = event.target.files[0]; // Get the selected file

                if (file) {
                  const reader = new FileReader(); // Create a FileReader to read the file

                  reader.onload = function (e) {
                    cat_img_ref.current.style.backgroundImage = `url(${e.target.result})`;
                    // img.style.display = "block";
                  };

                  reader.readAsDataURL(file);
                }
                handleChange(event);
              }}
              style={{ background: "white", color: "black" }}
              required
            />
            <input
              type="text"
              name="cat_name"
              value={formData.cat_name}
              onChange={handleChange}
              placeholder="enter category name"
              style={{ background: "white", color: "black" }}
            />
            <input type="submit" placeholder="submit" />
          </form>
        </div>
        <div className="right">
          <div className="head">Add item</div>
          <form
            className="category-form"
            onSubmit={async (e) => {
              console.log(itemFormData);
              e.preventDefault();

              const data = new FormData();
              data.append("item_name", itemFormData.item_name);
              data.append("item_desc", itemFormData.item_desc);
              data.append("item_price", itemFormData.item_price);
              data.append("cat_id", itemFormData.item_cat);
              data.append("item_img", itemFormData.item_image);
              data.append("rating", itemFormData.rating);
              data.append("type", itemFormData.type);

              try {
                const response = await fetch("http://localhost:5000/item", {
                  method: "POST",
                  body: data,
                });
                if (response.ok) {
                  const result = await response.json();
                  console.log("Success:", result);
                  location.reload();
                } else {
                  console.error("Upload failed:", response.statusText);
                }
              } catch (error) {
                console.error("Error:", error);
              }
            }}
          >
            <div
              ref={item_img_ref}
              style={{
                cursor: "pointer",
                borderRadius: "5px",
                width: "200px",
                height: "200px",
                backgroundImage:
                  "url('https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                document.getElementById("imginp2").click();
              }}
            />
            <input
              type="file"
              id="imginp2"
              name="item_image"
              accept="image/*"
              hidden
              onChange={(event) => {
                const file = event.target.files[0]; // Get the selected file

                if (file) {
                  const reader = new FileReader(); // Create a FileReader to read the file

                  reader.onload = function (e) {
                    item_img_ref.current.style.backgroundImage = `url(${e.target.result})`;
                    // img.style.display = "block";
                  };

                  reader.readAsDataURL(file);
                }
                handleChange(event);
              }}
              style={{ background: "white", color: "black" }}
              required
            />
            <input
              type="text"
              name="item_name"
              value={itemFormData.item_name}
              onChange={handleItemChange}
              placeholder="enter name"
              style={{ background: "white", color: "black" }}
            />
            <input
              type="text"
              name="item_price"
              value={itemFormData.item_price}
              onChange={handleItemChange}
              placeholder="enter price"
              style={{ background: "white", color: "black" }}
            />
            <input
              type="text"
              name="rating"
              value={itemFormData.rating}
              onChange={handleItemChange}
              placeholder="enter rating out of 5"
              style={{ background: "white", color: "black" }}
            />
            <input
              type="text"
              name="type"
              value={itemFormData.type}
              onChange={handleItemChange}
              placeholder="enter type"
              style={{ background: "white", color: "black" }}
            />
            <textarea
              type="text"
              name="item_desc"
              value={itemFormData.item_desc}
              onChange={handleItemChange}
              placeholder="enter description"
              style={{ background: "white", color: "black" }}
            />
            <select name="item_cat" onChange={handleItemChange}>
              <option value={"null"}>choose category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input type="submit" placeholder="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Admin;
