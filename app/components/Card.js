export default function CardGrid() {
  const cards = [
    {
      title: "Tesla Model 3",
      text: "Performance AWD – เริ่มต้นที่ ฿2,199,000 ",
      imageUrl: "/silder/12.jpg",
    },
    {
      title: "รุ่น Long Range (Dual Motor AWD)",
      text: "Long Range ประมาณ$54,130(ประมาณ 1.7 ล้านบาท)",
      imageUrl: "/silder/2.jpg",
    },
    {
      title: "2025 Tesla Model Y",
      text: "Long Range RWD: ประมาณ $46,630 (ประมาณ 1.5 ล้านบาท)",
      imageUrl: "/silder/3.jpg",
      buttonLink:
        "เปลี่ยนไฟ Daytime running light และไฟท้ายเป็นแถบเต็มความกว้างทั้งหน้า–หลังและเพิ่ม พวงมาลัยมี stalk สัญญาณไฟ, รองรับเสียงวิทยุแบบใหม่, จอหลังผู้โดยสารขนาด 8",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map(({ title, text, imageUrl, buttonText, buttonLink }, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className="card shadow-sm flex-fill"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-muted flex-grow-1">{text}</p>
                {buttonText && buttonLink && (
                  <a
                    href={buttonLink}
                    className="btn btn-primary rounded-pill px-4 mt-auto"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
