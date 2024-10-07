import { useEffect, useRef, useState } from "react";
import "./Admin.css";
const Admin = () => {
  const [formData, setFormData] = useState({
    cat_name: "",
    cat_img: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cat_img") {
      setFormData((prev) => ({ ...prev, cat_img: files[0] })); // For file input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value })); // For text input
    }
  };
  return (
    <>
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
                } else {
                  console.error("Upload failed:", response.statusText);
                }
              } catch (error) {
                console.error("Error:", error);
              }
            }}
          >
            <img
              src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw"
              alt=""
              width={200}
              height={200}
              style={{ cursor: "pointer", borderRadius: "5px" }}
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
              onChange={handleChange}
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
      </div>
    </>
  );
};
export default Admin;
