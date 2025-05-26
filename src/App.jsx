import { useState } from "react";

import "./App.css";

function App() {
  const [Glass, setGlass] = useState([]);
  console.log(Glass);
  const glass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  return (
    <>
      <>
        <header>
          <h1 style={{ textAlign: "center" }}>Try Glass App Online</h1>
        </header>
        <section
          className="background_shop"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: "url('/glassesImage/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div
            className="glass_item"
            style={{ position: "relative", width: "300px", height: "300px" }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="glassesImage/model.jpg"
              alt="model"
            />

            {/* Kính đeo mắt */}

            <img
              // src="./src/assets/glassesImage/v1.png"
              src={Glass.url}
              style={{
                position: "absolute",
                top: "60px", // chỉnh vị trí theo mặt
                left: "75px", // chỉnh sang trái/phải
                width: "150px", // điều chỉnh độ lớn kính
                opacity: 0.8, // hiệu ứng mờ
              }}
            />
          </div>
          <section>
            <div style={{ width: "300px", height: "200px" }}>
              <p className="id">Mã Sản Phẩm: {Glass.id}</p>
              <p className="price">Giá: {Glass.price} $</p>
              <p className="name">Tên Sản Phẩm: {Glass.name} </p>
              <p className="desc">Mô Tả: {Glass.desc}</p>
            </div>
          </section>

          <div
            className="glass_option"
            style={{
              width: "1000px",
              height: "300px",
              backgroundColor: "green",
              display: "grid",
              grid: "column",

              gridTemplateColumns: "repeat(3,1fr) ",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {glass.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setGlass(item);
                    console.log(item);

                    alert("Thay đổi kính");
                  }}
                  className="glass_2"
                  style={{
                    width: "250px",
                    height: "120px",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    // src="./src/assets/glassesImage/v1.png"
                    src={item.url}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </section>
      </>
    </>
  );
}

export default App;
